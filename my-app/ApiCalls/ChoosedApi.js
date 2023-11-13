import { useEffect} from "react";

const ContentData = ({setJsonData}) => {
  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/players')
    .then((response) => response.json())
    .then((json) => {
        setJsonData(json.data);
      })
    .catch((error) => console.error(error));
  }, [setJsonData])
    return null;
}
export default ContentData;
