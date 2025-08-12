'use client'

export const Profile = ({name, age, address, gender}) => {
    return(
        <div className={gender === 'f' ? "bg-pink-500": "bg-blue-500"}>
            <div className="text-lime-200">
                Name : {name}
            </div>
            <div>Age: {age}</div>
            <div>Address: {address}</div>
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