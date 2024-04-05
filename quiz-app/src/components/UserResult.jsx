import React from 'react';

const UserResult = (props) => {
    const {
        userResultData = {}
    } = props;
    // console.log('userResultData',userResultData)
    const topics = ['Username','HTML','CSS','JavaScript','Java','Python','PHP','Csharp','ReactJS'];
    
    return (
        <div className='userdetails-container'>
            <div className='container-header'>
                {topics?.map((item)=>{
                    return <span className="topic-list">{item}</span>
                })}
                    
            </div>
              <div className='container-body'>
                {userResultData?.map((result, index) => {
                   const marksForSub = topics?.reduce((store,item)=>{
                        if(item !== 'Username')
                        {
                            const relatedMarks = result?.obtainedMarks?.find((i)=> i?.[item?.toLowerCase()])?.[item?.toLowerCase()] || '-';
                            const marksWWithSub = [{sub:item,mark:relatedMarks}];
                            store.push(marksWWithSub);
                        }
                        return store.flat();
                    },[])
                    return (
                        <div className='user-marks'>
                            <span className='username'>{result?.username}</span>
                            {marksForSub?.map((mrk)=>{
                                return <span className='marks'>{mrk?.mark}</span>
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default UserResult;
