import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";

const Orders = () => {
  const tableData = {
    headers: [
      "Order ID",
      "Buyer",
      "Seller",
      "Buyer Email",
      "Seller Email",
      "Date",
      "Status",
    ],
    data: [
      {
        "Order ID": "#89072",
        Buyer: "Steve",
        Seller: "@dogz_arena",
        "Buyer Email": "johndoe@gmail.com",
        "Seller Email": "johndoe@gmail.com",
        Date: "17-08-2021",
        Status: "Pending",
      },
      {
        "Order ID": "#89073",
        Buyer: "Steve",
        Seller: "@dogz_arena",
        "Buyer Email": "johndoe@gmail.com",
        "Seller Email": "johndoe@gmail.com",
        Date: "16-08-2021",
        Status: "Completed",
      },
      {
        "Order ID": "#89074",
        Buyer: "Steve",
        Seller: "@dogz_arena",
        "Buyer Email": "johndoe@gmail.com",
        "Seller Email": "johndoe@gmail.com",
        Date: "16-08-2021",
        Status: "Pending",
      },
      {
        "Order ID": "#89075",
        Buyer: "Steve",
        Seller: "@dogz_arena",
        "Buyer Email": "johndoe@gmail.com",
        "Seller Email": "johndoe@gmail.com",
        Date: "16-08-2021",
        Status: "Completed",
      },
      {
        "Order ID": "#89076",
        Buyer: "Steve",
        Seller: "@dogz_arena",
        "Buyer Email": "johndoe@gmail.com",
        "Seller Email": "johndoe@gmail.com",
        Date: "15-08-2021",
        Status: "Pending",
      },
      {
        "Order ID": "#89077",
        Buyer: "Steve",
        Seller: "@dogz_arena",
        "Buyer Email": "johndoe@gmail.com",
        "Seller Email": "johndoe@gmail.com",
        Date: "14-08-2021",
        Status: "Completed",
      },
    ],
  };
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        {/* <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Traffic"
              amount="350,897"
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="New Users"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Sales"
              amount="924"
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
          </div>
        </div> */}
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard title={"Orders"} tableData={tableData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
