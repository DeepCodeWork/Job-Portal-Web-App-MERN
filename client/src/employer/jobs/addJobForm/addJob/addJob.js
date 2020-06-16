import React from 'react';
import Select from 'react-select';
import LocationAutoComplete from '../../../../maps/location';

const AddJob = ({inputHandler,addJobHandler,state,inputCategory}) => {

const categories = [
    { label:"IT",value:"IT" },
    { label:"Graphic",value:"Graphic" },
    { label:"data",value:"data" },
    { label:"teacher",value:"teacher" }
]
    const {name,location,website,description,category,error,success} = state;
    
    const showSuccess = state.success?<div className="alert alert-info">Job successfully added. Wait for it's review.</div>:null;
    const showError = state.error?<div className = "alert alert-danger">jobValues.error</div>:null;

    return (
        <div className="card bg-light text-center card-form mt-4">
                        <div className="card-body">
                            <div className="card-title"><h4>Add Job</h4></div>
								{showSuccess}
                                {showError}
								<div>
                                <form action="">
                                    <div className="form-group">
                                        <input className="form-control" value={name} 
                                        onChange={inputHandler('name')} type="text" placeholder="Company"/>
                                    </div>

                                    <div className="form-group">
                                        {/* <input className="form-control form-control" value={location} 
                                        onChange={inputHandler('location')} type="text" name="" id="search_term" placeholder="Location"/> */}
                                        <LocationAutoComplete/>
                                    </div>

                                    <div className="form-group">
                                        <Select onChange={inputCategory} value={category.value} options={categories}/>
                                    </div>

                                    <div className="form-group">
                                        <input className="form-control" value={website} 
                                        onChange={inputHandler('website')} type="email" name="" id="" placeholder="website"/>
                                    </div>

                                    <div className="form-group">
                                        <textarea className="form-control" onChange={inputHandler('description')} 
                                       value={description} rows="3">Description</textarea>
                                    </div>
                                    
                                    
                                    <div className="form-group">
                                        <button className="btn btn-outline-dark btn-block" 
                                        onClick={addJobHandler}>Submit!</button>
                                    </div>

                                </form>
								</div>
                        </div>
                    </div>
                
    );
}

export default AddJob;