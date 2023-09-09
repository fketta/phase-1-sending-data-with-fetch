function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    };
  
    return fetch("http://localhost:3000/users", config)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const id = data.id;
        const idElement = document.createElement("p");
        idElement.textContent = `New ID: ${id}`;
        document.body.appendChild(idElement);
      })
      .catch((error) => {
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  