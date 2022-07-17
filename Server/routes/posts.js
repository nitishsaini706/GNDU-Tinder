const router = require('express').Router();
const Post =require("../models/Post")
const User =require("../models/user")


// create a post 
router.post("/",async (req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// update post 
router.put("/:id",async (req,res)=>{
    try{
        const post = Post.findById(req.params.id);
        if(post.userId === req.body.userId)
        {
            await post.updateOne({$set:req.body});
            res.status(200).json("Post has been updated");
        }
        else{
            res.status(403).json("you can update only your post");
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

//delete post 

router.delete("/:id",async (req,res)=>{
    try{
        const post = Post.findById(req.params.id);
        if(post.userId === req.body.userId)
        {
            await post.deleteOne({$set:req.body});
            res.status(200).json("Post has been deleted");
        }
        else{
            res.status(403).json("you can delete only your post");
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})


// like post 

router.put("/:id/like",async (req,res)=>{
    try {
        const post= await Post.findById(req.params.id);
        if(!post.likes.included(req.body.userId))
        {
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("you likes the post");
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("you disliked the post");
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})


// get post 

router.get("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// get timeline epost 
router.get("/timeline/:userId" , async(req,res)=>{
    try{
        // we find current user 
        const currentUser = await User.findById(req.params.userId);

        // get all the posts of this user
        const userPosts = await Post.find({userId : currentUser._id});

        // now we get posts of friend post whom we;re following 
        // by maping to the id of people we re following 
        const friendPosts= await Promise.add(
            currentUser.followings.map((friendId)=>{
                return Post.find({userId:friendId})
            })
        );

        // this will concat all post with current posts in feed
        res.json(userPosts.concat(...friendPosts));
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

// get user's all posts 
router.get("/profile/::username" , async(req,res)=>{
    try{
        // we find current user 
        const user = await User.findOne({username:req.params.username})
        const posts = await Post.find({userid : user._id});
        res.status(200).json(posts);
        
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})


module.exports =  router;