const ReducerApp = (state, action) => {
  const getExisting = () => {
    return JSON.parse(localStorage.getItem("1"));
  };

  switch (action.type) {
    case "ADD_EMPLOYEE":
      const newEmployee = action.payload;
      const existing = getExisting();
      const updatedUsers = {
        users: [...existing.users, newEmployee],
      };
      localStorage.setItem("1", JSON.stringify(updatedUsers));

      return {
        users: updatedUsers.users,
      };

    case "REMOVE_EMPLOYEE":
      const existingEmployees = getExisting();
      const updatedList = {
        users: existingEmployees.users.filter(
          (user) => user.id !== action.payload
        ),
      };
      localStorage.setItem("1", JSON.stringify(updatedList));

      return {
        users: updatedList.users,
      };

    default:
      return;
  }
};

export default ReducerApp;
