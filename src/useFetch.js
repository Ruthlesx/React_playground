import {useState, useEffect} from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then((d) => setData(d))
  }, [url]);

  return [data];


}


export default useFetch;