const posts = [{title: 'POST1'}];
const users=[];
function updateLastUserActivityTime(){
        return new Promise((resolve)=>{
            setTimeout(() => {  const date=new Date();
                resolve(date);
            },1000)
        })
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        const add=post;
        const un={uName:'codder',lastActive:new Date()};
        posts.push(add);
        users.push(un);
        resolve({add,un});
    })
}
async function processAll(){
    let post;
    let updation;
    let allData;
    try{
        post=createPost({title:'POST2'});
        updation=updateLastUserActivityTime();
        allData=await Promise.all([post,updation]); 
    }
    catch(e){
        allData='error'
    }
    return(allData);
}
processAll().then((value)=>{
    // console.log(value)
    console.log(`before creating ${value[0].add.title}, ${value[0].un.uName} lastActivityTime : ${value[0].un.lastActive}`);
    console.log(`After creating ${value[0].add.title}>>>`);
    console.log(`${value[0].un.uName} last activity time : ${value[1]}`)
})

// async function process2(){
//     let post=await createPost({title:'POST2'});
//     console.log(`before creating ${post.add.title}, ${post.un.uName} lastActivityTime = ${post.un.lastActive}`)
//     let updation= await updateLastUserActivityTime();
//     console.log(`After creating ${post.add.title}>>>`);
//     console.log(`${post.un.uName} last activity time = ${updation}`)
//     return ({post,updation});
// }
// process2()

// Promise.all([createPost({title:'POST2'}),updateLastUserActivityTime()]).then((value)=>{
//     console.log(`before creating ${value[0].add.title}, ${value[0].un.uName} lastActivityTime = ${value[0].un.lastActive}`);
//     setTimeout(()=>{console.log(`After creating ${value[0].add.title}>>>`);
//     console.log(`${value[0].un.uName} last activity time = ${value[1]}`);},1000) 
// }).catch((error)=>{
//     console.log(`error:${error}`);
// })