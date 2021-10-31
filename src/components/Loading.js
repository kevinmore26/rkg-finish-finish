

export default function Loading() {
    return (
        <div style={{
            position: 'fixed',
            top:'0',
            left:'0',
            width:'100vw',
            height:'100vh',
            zIndex:99,
            backgroundColor:'white'
        }}>
            <i 
                className="fas fa-bone fa-spin fa-4x" 
                style={{
                    color:'rgb(25, 135, 84)',
                    position:'absolute',
                    top:'calc(50% - 50px)',
                    left:'calc(50% - 50px)'
                }}
            />

        </div>
    )
}
