const logout = (req,res)=>{
    res.clearCookie('c');
    res.status(200).send({message:"logged out successfully"});
}

module.exports = logout;