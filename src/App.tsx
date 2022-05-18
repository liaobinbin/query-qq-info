import React from "react";
import { SmLoading, SmInput, SmInfo } from "./components";
import { getQqInfo, QqInfo } from "./api";
import { debounce, isValidQQ } from "./util";

import "./App.css";

function App() {
  const [typeing, setTypeing] = React.useState(false);
  const [error, setError] = React.useState("");
  const [info, setInfo] = React.useState<QqInfo | null>(null);

  const [qq, setQq] = React.useState<string>("");

  const handleSearch = async (qq: string) => {
    if (qq.length === 0) {
      return;
    }
    try {
      const res = await getQqInfo(qq);
      if (res.code !== 1) {
        setError(res.msg || `server error: ${res.code}`);

        return;
      }
      setInfo(res);
    } catch (err) {
      setError("err:" + err);
    }

    setTypeing(false);
  };

  React.useEffect(() => {
    handleSearch(qq);
  }, [qq]);

  const onChange = debounce((value: string) => {
    if (value.length === 0) {
      setTypeing(false);
      setInfo(null);
      setError("");
      return;
    }

    if (!isValidQQ(value)) {
      setInfo(null);
      setError("Error format qq number");
      return;
    }
    setError("");
    setInfo(null);

    if (!typeing) {
      setTypeing(true);
    }
    setQq(value);
  }, 1000);

  return (
    <div className="App">
      <h1>Query QQ Info</h1>
      <SmInput prefix="QQ" onChange={onChange} value={qq} error={error} />
      <SmLoading show={typeing}>
        {info && (
          <div style={{ marginTop: "10px" }}>
            <SmInfo qlogo={info.qlogo} qq={qq} name={info.name} />
          </div>
        )}
      </SmLoading>
    </div>
  );
}

export default App;
