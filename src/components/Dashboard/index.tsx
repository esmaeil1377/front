import Header from "components/Header";
import { useEffect, useState } from "react";
import { getList } from "utilities/api";
import { Button } from "react-bootstrap";
import Card from "components/Card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [size, setSize] = useState(3);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchList = async () => {
      const data = await getList({ page: 1, size });
      if (data === "unauthorized") navigate("/login");
      setList(data?.result);
      setTotal(data?.total);
    };
    fetchList();
  }, [size]);
  return (
    <div className="dashboard">
      <Header />
      <div className="viewed-total">
        <p>Viewed: {size}</p>
        <p>Total: {total}</p>
      </div>
      <div className="cards-container">
        {list?.map((item: any) => (
          <Card {...item} />
        ))}
      </div>
      {size !== total && (
        <div className="load-more-container">
          <Button
            variant="primary"
            onClick={() => setSize(size + 3 < total ? size + 3 : total)}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
