const di = document.querySelector(".local");
const local = document.querySelector(".local");
const names = document.getElementById("name");
const emails = document.getElementById("email");
const phones = document.getElementById("phone");
document.querySelector("form.formdata").addEventListener("submit", function (e) {
    e.preventDefault();
    const element = document.querySelector("form.formdata").elements;
    const user_obj = {name: element["name"].value,email: element["email"].value,phone: element["phone"].value};
    window.location.reload();
    if (!names.title) {
        axios.post("http://localhost:3000/booking", user_obj) // sending the data
        .then((data) => {
          const div = document.createElement("div");
          div.className = "d-inline-flex p-2";
          const p = document.createElement("p");
          div.setAttribute("id", data.user_obj._id);
          p.appendChild(document.createTextNode(data.name + " " + data.email + " " + data.phone));
          const btn = document.createElement("button");
          btn.className = "del_button";
          btn.appendChild(document.createTextNode("Delete"));
          const btn1 = document.createElement("button");
          btn1.className = "edit_btn";
          btn1.appendChild(document.createTextNode("Edit"));
          div.appendChild(p);
          div.appendChild(btn);
          div.appendChild(btn1);
          di.appendChild(div);
        })
        .catch((err) => console.log(err));}
        else {
         axios.put("http://localhost:3000/" + names.title, user_obj) //incase we need to update the data we ue put
        .then((data) => {
          const div = document.createElement("div");
          div.className = "d-inline-flex p-2";
          const p = document.createElement("p");
          div.setAttribute("id", data.data._id);
          p.appendChild(document.createTextNode(data.name + " " + data.email + " " + data.phone));
          const btn = document.createElement("button");
          btn.className = "del_button";
          btn.appendChild(document.createTextNode("Delete"));
          const btn1 = document.createElement("button");
          btn1.className = "edit_btn";
          btn1.appendChild(document.createTextNode("Edit"));
          div.appendChild(p);div.appendChild(btn);div.appendChild(btn1);di.appendChild(div);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  });
//Fetch all data
     window.addEventListener("DOMContentLoaded", () => {
     axios.get("http://localhost:3000") //using axios to get the data 
    .then((res) => {
      const data = res.data.appointments;
      for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.className = "d-inline-flex p-2";
        const p = document.createElement("p");
        div.setAttribute("id", data[i].id);
        p.appendChild(document.createTextNode(data[i].name + " " + data[i].email + " " + data[i].phone));
        const btn = document.createElement("button");
        btn.className = "del_button";
        btn.style="width: 25%; border-width: thin; border-radius: 5px;border-color: lightgray; border-style:solid; color: red;";
        btn.appendChild(document.createTextNode("Delete"));
        const btn1 = document.createElement("button");
        btn1.className = "edit_btn";
        btn1.style="width: 25%; border-width: thin; border-radius: 5px;border-color: lightgray; border-style:solid; color: grey;";
        btn1.appendChild(document.createTextNode("Edit"));
        div.appendChild(p);div.appendChild(btn); div.appendChild(btn1); di.appendChild(div);       
      }  
    })
    .catch((err) => console.log(err));
});
//delete data server
local.addEventListener("click", delete_data);
function delete_data(e) {
  if (e.target.classList.contains("del_button")) {
    window.location.reload();
    axios.delete("http://localhost:3000/" + e.target.parentElement.id)
      .then((res) => {
        console.log("res", res);
        console.log(e.target.parentElement);
        di.removeChild(e.target.parentElement);
      })
      .catch((err) => console.log(err));
  }
}
//edit local storage 
local.addEventListener("click", edit_data);
function edit_data(e) {
  if (e.target.classList.contains("edit_btn")) {
    const edit = e.target.parentElement.id;
    axios.get("http://localhost:3000/" + edit).then((res) => {
      const data = res.data.appointment;
      names.value = data.name;
      names.title = data.id;
      emails.value = data.email;
      phones.value = data.phone;
    });
  }
}
