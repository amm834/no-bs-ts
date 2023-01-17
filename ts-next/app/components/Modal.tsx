type ModalProps =
    | { type: "alert" }
    | {
    type: "confirm";
    message: string;
}

const Modal = (props: ModalProps) => {
    return <div>
      
    </div>
}

function Home() {
    return (
        <Modal type="confirm" message="hello wrold"/>
    )
}

export default Home;