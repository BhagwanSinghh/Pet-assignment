import React, { useState } from "react";
import "./PetManagement.css";

const styles = {
  input: {
    marginRight: "10px",
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #2C3E50",
    outline: "none",
    transition: "borderBottom 0.3s",
    borderRadius: "5px",
    backgroundColor: "#ECF0F1",
    color: "#2C3E50",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2C3E50",
    color: "#ECF0F1",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  },
};

const PetManagement = () => {
  const initialState = {
    pets: [],
    petName: "",
    customerName: "",
    email: "",
    editingIndex: null,
    errors: {
      petName: null,
      customerName: null,
      email: null,
    },
  };

  const [state, setState] = useState(initialState);
  const [hoverButton, setHoverButton] = useState(null);


  const addPet = () => {
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      setState((prevState) => ({
        ...prevState,
        pets: [
          ...prevState.pets,
          {
            petName: prevState.petName,
            customerName: prevState.customerName,
            email: prevState.email,
          },
        ],
        petName: "",
        customerName: "",
        email: "",
        errors: {
          petName: null,
          customerName: null,
          email: null,
        },
      }));
    } else {
      setState({ ...state, errors });
    }
  };

  const startEditPet = (index) => {
    setState((prevState) => ({
      ...prevState,
      petName: prevState.pets[index].petName,
      customerName: prevState.pets[index].customerName,
      email: prevState.pets[index].email,
      editingIndex: index,
    }));
  };

  const saveEditPet = () => {
    const errors = validateInputs();

    if (Object.keys(errors).length === 0) {
      const newPets = [...state.pets];
      newPets[state.editingIndex] = {
        petName: state.petName,
        customerName: state.customerName,
        email: state.email,
      };
      setState({
        ...state,
        pets: newPets,
        petName: "",
        customerName: "",
        email: "",
        editingIndex: null,
        errors: {
          petName: null,
          customerName: null,
          email: null,
        },
      });
    } else {
      setState({ ...state, errors });
    }
  };

  const deletePet = (index) => {
    const newPets = [...state.pets];
    newPets.splice(index, 1);
    setState({ ...state, pets: newPets });
  };

  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const validateInputs = () => {
    let errors = {};

    if (!state.petName.trim()) {
      errors.petName = "Pet Name is required!";
    }

    if (!state.customerName.trim()) {
      errors.customerName = "Customer Name is required!";
    }

    if (!isValidEmail(state.email)) {
      errors.email = "Invalid Email!";
    }

    return errors;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Pet Management</h2>
      </div>


      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 1, marginRight: 10 }}>
            <input
              style={{ ...styles.input }}
              placeholder="Pet Name"
              value={state.petName}
              onChange={(e) => setState({ ...state, petName: e.target.value })}
              onFocus={(e) =>
                (e.currentTarget.style.borderBottom = "2px solid #3498db")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderBottom = "2px solid #2C3E50")
              }
            />
            {state.errors.petName && (
              <div style={{ color: "red" }}>{state.errors.petName}</div>
            )}
          </div>

          <div style={{ flex: 1, marginRight: 10 }}>
            <input
              style={{ ...styles.input }}
              placeholder="Customer Name"
              value={state.customerName}
              onChange={(e) =>
                setState({ ...state, customerName: e.target.value })
              }
              onFocus={(e) =>
                (e.currentTarget.style.borderBottom = "2px solid #3498db")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderBottom = "2px solid #2C3E50")
              }
            />
            {state.errors.customerName && (
              <div style={{ color: "red" }}>{state.errors.customerName}</div>
            )}
          </div>

          <div style={{ flex: 1, marginRight: 10 }}>
            <input
              style={{ ...styles.input }}
              placeholder="Email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              onFocus={(e) =>
                (e.currentTarget.style.borderBottom = "2px solid #3498db")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderBottom = "2px solid #2C3E50")
              }
            />
            {state.errors.email && (
              <div style={{ color: "red" }}>{state.errors.email}</div>
            )}
          </div>
          {state.editingIndex === null ? (
            <button
              className="add"
              onClick={addPet}
              style={
                state.editingIndex === null
                  ? { ...styles.button }
                  : { ...styles.button, backgroundColor: "#2C3E50" }
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#3498db")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#2C3E50")
              }
            >
              Add Pet
            </button>
          ) : (
            <button
              onClick={saveEditPet}
              style={
                state.editingIndex === null
                  ? { ...styles.button }
                  : { ...styles.button, backgroundColor: "#e67e22" }
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#d35400")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#e67e22")
              }
            >
              Save Changes
            </button>
          )}
        </div>

        {/* Table Section */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {state.pets.length === 0 ? (
            <p>No pets available. Please add some.</p>
          ) : (
            <table
              style={{
                width: "80%",
                margin: "20px",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                borderCollapse: "collapse",
                overflow: "hidden",
                borderRadius: "10px",
                transition: "all 0.3s",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#2C3E50",
                    color: "#ECF0F1",
                    textAlign: "center",
                  }}
                >
                  <th style={{ padding: "20px" }}>Pet Name</th>
                  <th style={{ padding: "20px" }}>Customer Name</th>
                  <th style={{ padding: "20px" }}>Email</th>
                  <th style={{ padding: "20px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.pets.map((pet, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 ? "#ECF0F1" : "#bdc3c7",
                      transition: "all 0.2s",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#3498db")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        index % 2 ? "#ECF0F1" : "#bdc3c7")
                    }
                  >
                    <td style={{ padding: "15px" }}>{pet.petName}</td>
                    <td style={{ padding: "15px" }}>{pet.customerName}</td>
                    <td style={{ padding: "15px" }}>{pet.email}</td>
                    <td style={{ padding: "15px" }}>
                      <button
                        onClick={() => startEditPet(index)}
                        style={{
                          marginRight: "10px",
                          padding: "5px 15px",
                          border: "none",
                          backgroundColor: "#e67e22",
                          color: "white",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletePet(index)}
                        style={{
                          padding: "5px 15px",
                          border: "none",
                          backgroundColor: "#c0392b",
                          color: "white",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetManagement;
