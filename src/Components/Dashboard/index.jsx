import React, {useState, useEffect} from "react";
import DataTable from 'react-data-table-component';


const Dashboard = () => {

    // const [MentorData, setMentorData] = useState([]);

    // useEffect(() => {
    //     console.log("mentor fetch");
    //     console.log(process.env.REACT_APP_API_URL);
    //     console.log(`${process.env.REACT_APP_API_URL}users/`);
    //     fetch(`${process.env.REACT_APP_API_URL}users/`)
    //       .then((results) => {
    //         console.log(results);
    //         return results.json();
    //       })
    //       .then((data) => {
    //         setMentorData(data);
    //       })
    //       .catch((e) => {
    //         console.log("OH NOOO: ", e);
    //       });
    //   }, []);

const MentorData = [
      { name: "Mohammad", state: "QLD", status: "onboarded" },
      { name: "Nayeem Raihan ", state: "NSW", status: "application received" },
  ];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<input className="TextField"
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<button className="ClearButton" type="button" onClick={onClear}>
			X
		</button>
	</>
);

    
    const columns = [
        { name: "Name", selector: row => row.name, sortable: true },
        { name: "State", selector: row => row.state, sortable: true  },
        { name: "Status", selector: row => row.status, sortable: true, formatter: (cell, row) => <a href={cell}> {cell} </a>
      },
    ];

  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = MentorData.filter(
		item => item.state && item.state.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    return (
        <DataTable
        title="Mentors"
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            selectableRows
            persistTableHead
        />
    );
};

export default Dashboard;