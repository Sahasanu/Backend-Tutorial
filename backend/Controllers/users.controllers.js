import User from "../model/user.model.js"
// mongoose

// create- to Add single single value
// insertMany-to Insert many values/array
// findBYid- to find any data by id 
// findByidAndUpdate - to find and update the data of that id 
// Delete - to delete any data
// DelelbyID - to delete by id 

const getAllUsers= async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById=  async (req, res) => {
    try {
        const user = await User.findById(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  const insertOne=  async (req, res) => {
    try {
        const user = await User.create(req.body); 
        res.status(201).json(user);
    } catch(error) {
        console.error(`Error while inserting User: ${error.message}`);
        res.status(500).json({ error: "Failed to create user" });
    }
};

const insertMany= async (req, res) => {
    try {
        const users = await User.insertMany(req.body); 
        res.status(201).json(users);
    } catch(error) {
        console.error(`Error while inserting User: ${error.message}`);
        res.status(500).json({ error: "Failed to create user" });
    }
}

const updateUser=async (req, res) => {
    try {
        const Updateuser = await User.findByIdAndUpdate(
            // id to find user
             req.body._id, 
            // What to update
            req.body,
            {new:true}  // returns new doc
        ); 

        if(!Updateuser) return res.status(404).json({message:"User Not found"})
        
        res.status(201).json(Updateuser);
    } catch(error) {
        console.error(`Error while Updating User: ${error.message}`);
        res.status(500).json({ error: "Failed to Update user" });
    }
}

const deleteUser=async (req, res) => {
    try {
        const deluser = await User.findByIdAndDelete(req.body); 

        if(!deluser) return res.status(404).json({message:"user Not found"})
        
            res.status(201).json({message:"Deleted sucessfully"});
    } catch(error) {
        console.error(`Error while deleting User: ${error.message}`);
        res.status(500).json({ error: "Failed to Delete user" });
    }
}



export {getAllUsers,getUserById , insertOne,insertMany,updateUser,deleteUser}