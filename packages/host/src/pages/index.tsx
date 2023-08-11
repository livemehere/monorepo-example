import Button from "ui/src/components/Button";

export default function Home() {
  return (
    <div>
        <Button text={'HI'} onClick={()=> console.log('click!')}/>
    </div>
  )
}
