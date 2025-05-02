export default function UserProfile({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <p className="text-2xl">Profile page 
            <span className="text-green-600"> {params.id}</span>
            </p>
        </div>
    )
}