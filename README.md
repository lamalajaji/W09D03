# User Story : 
* Register : user can not use the app without Sign Up 
* login : User can not show his list if he doesn't login 
* get : tasks will display as a list when user login in the app . 
* edit : user can modify his tasks 
* Post : user can add a new tasks 
* Delete : user can remove his tasks


# components : 
* Register 
* Login 
* List
 

# Client / Fronend : 
## React Router Routs : 
| Path     | Component      | 
| :---     |      ---:      |  
| `/`      |  Login         | 
| `signup` |  Register      | 
| `list`   |  List          | 



# Server / Backend
* Auth Service :
- auth.getTodos(user)
- auth.editTask(user)
- auth.addTask(user)
- auth.removeTask(user)


# Models : 

* Roles Model : 
```
const rolesSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  permissions: {
    type: Array,
    required: true,
  },
});
```

* Users Model : 

```
const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passowrd: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    default: "61a6013d6215cdf69f4f70bf",
  },
});
```

* Tasks Model : 
```
const tasksSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
```


# Backend Routes : 

| HTTP Method   | URL            | Success status | Error status |
| :---          |     :---:      |     :---:      |    ---:      |
| GET           |     /todos     |      200       |     404      |
| POST          |      /todo     |      201       |     400      |
| PUT           |    /edit/:id   |      200       |     404      |
| DELETE        |   /remove/:id  |      200       |     400      |



# Links 
* [MongoDB Doc](https://docs.mongodb.com/manual/installation/)
* [Express Doc](https://expressjs.com/en/starter/installing.html)
* [Postman Doc](https://www.postman.com/downloads/)
* [React Doc](https://reactjs.org)
* [Redux Doc](https://redux.js.org)
