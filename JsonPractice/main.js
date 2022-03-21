async function ObtainData (){
    const response = await fetch('http://127.0.0.1:5500/JsonPractice/data.json');
    const json = await response.json();
    //console.log(JSON.stringify(json));
    let Name = (json.Experience)
    console.log(Name)
}

ObtainData();