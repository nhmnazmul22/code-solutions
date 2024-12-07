import { useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const Loading = () => {
  let [loading, setLoading] = useState(true);
  return (
    <div className="sweet-loading mt-10">
      <GridLoader
        color="#3B82F6"
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
