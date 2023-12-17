import React  from 'react'  



    const NewsItem =(props)=>{

        // In class-based component we used (this.props)  but in function-based (we don't use)....
           
    
        let {title,description,imageUrl,newsUrl,author,date} = props;
        return (
            <div className='my-3'>

                <div className="card" >
                    <img src={!imageUrl?"https://i.gadgets360cdn.com/large/galaxy_watch_4_samsung_1694499272509.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}... </h5>
                            <p className="card-text">{description}... </p>
                            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>

                            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
 

export default NewsItem