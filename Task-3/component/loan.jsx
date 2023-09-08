import { useState } from "react";


export default function Loan() {
const [person, setPerson] = useState({
Name: "",
Phone: "",
Age: "",
emp:false ,
Salary: -500,
});


const handleSubmit = (e) => {
    e.preventDefault();

    if (person.Name === "") {
      alert('Please enter a your name.');
      return; 
    }
    if (person.Phone === "") {
        alert('Please enter a your phone.');
        return; 
      }
    if (person.Age === "") {
        alert('Please enter a your age.');
        
        return; 
      }

    console.log(person);
  };

function handleNameChange(e) {
    setPerson({
    ...person,
    Name: e.target.value,
});
}
function handlePhoneChange(e) {
    setPerson({
    ...person,
    Phone: e.target.value,
});

}
function handleAgeChange(e) {
    setPerson({
        ...person,
    Age: e.target.value,
    });
    
    
    }
function handleEmpChange(e) {
    setPerson({
        ...person,
        emp: !person.emp,
         });
            
    }
function handleSalaryChange(e) {
    setPerson({
        ...person,
    Salary: e.target.value,
    });
                
        }
return (
<>
<div className="form">
    <label className="head">Requesting a Loan <hr />
</label>
<label className="name">
Name:<br />
<input value={person.Name} onChange={handleNameChange} />
</label>
<br />
<label>
Phone Number:<br />
<input value={person.Phone} onChange={handlePhoneChange} />
</label>
<br />

<label>
Age:<br />
<input value={person.Age} onChange={handleAgeChange} />
</label>
<br />

<label>
Are you an emploeey? <br />
<input type="checkbox" value={person.emp} onChange={handleEmpChange} />
</label>
<br />

<label>
Salary: <b></b>
<select name="" id="" onChange={handleSalaryChange}>
    <option value="-500">less than 500$</option>
    <option value="+500">more than 500$</option>

</select>
</label>
<label>
    <br />
<button onClick={handleSubmit}>Submit</button>
</label>
</div>
</>
);
}