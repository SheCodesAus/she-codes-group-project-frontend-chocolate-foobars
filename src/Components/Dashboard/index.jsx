import React, {useState, useEffect} from "react";
import DataTable from 'react-data-table-component';
import './Dashboard.css'

// built using instructions on https://react-data-table-component.netlify.app/?path=/story/examples-filtering--filtering&globals=backgrounds.grid:false
// to install npm install react-data-table-component
// currently unable to get second filtered component working

const Dashboard = () => {

    const token = window.localStorage.getItem("token",);

    const [MentorData, setMentorData] = useState([]);

    useEffect(() => {
        console.log("mentor fetch");
        fetch(`${process.env.REACT_APP_API_URL}users/`,
        {
            headers: {
                Accept: 'application/json',
                "Authorization": `Token ${token}`
            }
          })
        .then((results) => {
            console.log(results);
            console.log(token)
            return results.json();
        })
        .then((data) => {
            setMentorData(data);
        })
        .catch((e) => {
            console.log("Error: ", e);
        });
    }, []);

// const MentorData = [
//       { first_name: "Mohammad", state: "QLD", status: "onboarded" },
//       { first_name: "Nayeem", state: "NSW", status: "application received" },
//   ];

const FilterComponentOne = ({ filterText, onFilter, onClear }) => (
	<>
    <select 
        className="custom-select"
        aria-label="Filter Mentors By State"
        onChange={onFilter} value={filterText}
    >
        <option value="All">Filter By State</option>
        <option value="QLD">QLD</option>
        <option value="NSW">NSW</option>
        <option value="WA">WA</option>
    </select>

	</>
);

const FilterComponentTwo = ({ filterText, onFilter, onClear }) => (
	<>

    <select 
        className="custom-select"
        aria-label="Filter Mentors By Status"
        onChange={onFilter} value={filterText}>
        <option value="All">Filter By Status</option>
        <option value="Application received">Application received</option>
        <option value="Ready for interview">Ready for interview</option>
        <option value="Position offered">Position offered</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
    </select>

	</>
);
    
    const columns = [
        { name: "View Profile", 
        button: true,
        datatag:"allowRowEvents",
        cell: MentorData => (
            <a href={(`/profile/${MentorData.id}`)} target="_blank" rel="noopener noreferrer">
        View Profile</a>) },
        { name: "First Name", 
        selector: row => row.first_name, 
        sortable: true
        },
        { name: "Last Name", selector: row => row.last_name, sortable: true },
        { name: "Email", selector: row => row.email, sortable: true },
        { name: "State", selector: row => row.state, sortable: true  },
        { name: "Status", selector: row => row.status, sortable: true },
    ];

    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = MentorData.filter(
		item => item.state && item.state.toLowerCase().includes(filterText.toLowerCase())  ||
       item.status && item.status.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponentOne onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
            
		)
        ;
        
	}, [filterText, resetPaginationToggle]);

    const subHeaderComponentMemoTwo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponentTwo FilterComponentTwo onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
            
		)
        ;
        
	}, [filterText, resetPaginationToggle]);

    

    return (
        
        <DataTable
        title="Mentors"
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={[subHeaderComponentMemo,subHeaderComponentMemoTwo]}
            selectableRows
            persistTableHead
        />
    );
};

export default Dashboard;