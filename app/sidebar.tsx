import Calender from "./components/calender"
import Accounts from "./components/accounts"
import Pending from "./components/pendingAssignments"

const Sidebar = () => {
  return (
    <main className="w-[700px] h-full p-2 flex flex-col gap-3">
        <Calender />
        <Pending />   
        <Accounts />
    </main>
  )
}

export default Sidebar