//  Start coding here
class User{ constructor(id,name,email){
    this.id=id;
    this.name=name;
    this.email=email;}
}

class postList{constructor(posts){
    this.posts=[posts];}

    addPost(newPost){
        this.posts.push(newPost)
        return this.posts
    }
        
    sharePost(postTitle){
        this.postTitle=postTitle
        console.log(`You've shared post ${this.postTitle} to your friend.`)
    }
}

class Post{
    constructor(id,title,content,comment){
    this.id=id;
    this.title=title;
    this.content=content;
    this.comment=[];}

    addComment(newComment){
        this.comment.push(newComment)
        return this.comment
    }
}

class Comment{
    constructor(id,content,createdBy,like){
        this.id=id;
        this.content=content;
        this.createdBy=createdBy;
        this.like=0;}
    
    addLike(){
       return this.like+=1
    }
}

class Facebook{
    constructor(groupList,pageList){
        this.groupList=[groupList];
        this.pageList=[pageList];}
    
    addGroup(newGroup){
        this.groupList.push(newGroup)
        return this.groupList
    }

    addPage(newPage){
        this.pageList.push(newPage)
        return this.pageList
    }
}

class FacebookPage{
    constructor(name){
        this.name=name;
    }
}

class FacebookGroup{
    constructor(name){
        this.name=name;
    }
}

class Notification{
    constructor(id){
        this.id=id;
    }

    send(post){
        console.log(`Notification: ${post.id} has just commented on this post— "${post.title}" `)
    }
}

let newPost = new Post("1","Hi Guy","How are you?");
console.log(newPost)

let newcomment = new Comment("1","im fine!","Guy");
newPost.addComment(newcomment);
let newComment = new Comment("2","im fine and you?","Donut");
newPost.addComment(newComment);
newComment.addLike()
newComment.addLike()


let newNotification = new Notification("1");
newNotification.send(newPost);