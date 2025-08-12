'use client'

export const Profile = (props) => {
    return(
        <div className={props.gender === 'f' ? "bg-pink-500": "bg-blue-500"}>
            <div className="text-lime-200">
                Name : {props.name}
            </div>
            <div>Age: {props.age}</div>
            <div>Address: {props.address}</div>
            <button 
                type="button" 
                className="bg-indigo-500"
                onClick={()=>{
                    alert("Ini cobain keluarkan alert")
                }}>
                Alert me
            </button>
        </div>
    );
}