const initialState = {
  list: [],
};

const List = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET":
      const { list } = payload;
      return list;

    case "POST":
      const { task } = payload;
      return [...state.list, task];

    case "PUT":
      const { modified } = payload;
      const edited = state.list.map((task) => {
        if (task._id === modified._id) {
          return modified;
        }
        return task;
      });
      return { list: edited };

    case "DELETE":
      const { removed } = payload;
      const filtered = state.list.filter((ele) => {
        return ele._id !== removed._id;
      });
      return { list: filtered };

    default:
      return state;
  }
};

export default List;

export const getList = (data) => {
  return {
    type: "GET",
    payload: { list: data },
  };
};

export const postTask = (data) => {
  return {
    type: "POST",
    payload: { task: data },
  };
};

export const editTask = (data) => {
  return {
    type: "PUT",
    payload: { modified: data },
  };
};

export const removeTask = (data) => {
  return {
    type: "DELETE",
    payload: { removed: data },
  };
};
