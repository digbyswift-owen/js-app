    let params = (
        new URL(document.location)).searchParams;
        let name = params.get('name');
        document.getElementById("name").innerHTML = name;