// Seller functions

const url = "http://localhost:5000/api/products/";

// add product to database
async function addProduct(data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

//update product with id
async function updateProduct(id, data) {
  try {
    const response = await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

// delete a product from database
async function deleteProduct(id) {
  try {
    const response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { addProduct, deleteProduct, updateProduct };
