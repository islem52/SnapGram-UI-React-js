import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import tobbar from "../../components/common/tobbar";
import {Sidebar} from "../../components/common/Sidebar"
import RightPanel from "../../components/common/RightPanel";

const NotificationPage = () => {
	const isLoading = false;
	const notifications = [
		{
			_id: "1",
			from: {
				_id: "1",
				username: "johndoe",
				profileImg: "/avatars/boy2.png",
			},
			type: "follow",
		},
		{
			_id: "2",
			from: {
				_id: "2",
				username: "janedoe",
				profileImg: "/avatars/girl1.png",
			},
			type: "like",
		},
	];

	const deleteNotifications = () => {
		alert("All notifications deleted");
	};

	return (
		<>
				
			<div className='flex-[4_4_0]  rounded-2xl shadow-2xl m-auto min-h-screen'>
			<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">EduConnect</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      
    </div>
  </div>
</div>
			<tobbar/><div className= ' flex justify-between p-4 rounded-lg shadow-2xl'>
					<p className='font-bold ml-96 '>Notifications</p>
					<div className='dropdown '>
						<div tabIndex={0} role='button' className='m-1'>
							<IoSettingsOutline className='w-4 ' />
						</div>
						<ul
							tabIndex={0}
							className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52  '
						>
							<li>
								<a onClick={deleteNotifications}>Delete all notifications</a>
							</li>
						</ul>
					</div>
				</div>
				{isLoading && (
					<div className='flex justify-center h-full items-center'>
						<LoadingSpinner size='lg' />
					</div>
				)}
				{notifications?.length === 0 && <div className='text-center p-4 font-bold'>No notifications 🤔</div>}
				{notifications?.map((notification) => (
					<div className='border-b border-gray-700' key={notification._id}>
						<div className='flex gap-2 p-4'>
							{notification.type === "follow" && <FaUser className='w-7 h-7 text-primary' />}
							{notification.type === "like" && <FaHeart className='w-7 h-7 text-red-500' />}
							<Link to={`/profile/${notification.from.username}`}>
								<div className='avatar'>
									<div className='w-8 rounded-full'>
										<img src={notification.from.profileImg || "/avatar-placeholder.png"} />
									</div>
								</div>
								<div className='flex gap-1'>
									<span className='font-bold'>@{notification.from.username}</span>{" "}
									{notification.type === "follow" ? "followed you" : "liked your post"}
								</div>
							</Link>
						</div>
					</div>
				))}
			</div>
			<RightPanel/>
		</>
	);
};
export default NotificationPage;