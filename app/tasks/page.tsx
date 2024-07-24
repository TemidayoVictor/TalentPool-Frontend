import React from "react";
import CategorySide from "../components/Category/CategorySide";

const Tasks = () => {
    return (
        <div className="container tasks-body">
            <div className="w-[100%] xl:w-[20%]">
                <CategorySide></CategorySide>
            </div>
            <div className="task-main w-[100%] xl:w-[77%]">
                <div className="mb-5 font-bold border-b border-[#a5a5a5] pb-2">
                    <h1 className="text-4xl">Available Tasks</h1>
                </div>
                
                <div className="task">
                    <div className="task-time text-[.8rem] text-[gray]">
                        <p>Posted 26 minutes ago</p>
                    </div>
                    <div className="task-title">
                        <h2 className="text-3xl font-bold">Email Support Analyst</h2>
                    </div>
                    <div className="task-details">
                        <p className="text-[1rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sint animi illum ipsam consequatur eius corrupti repudiandae corporis dolor doloribus accusamus quam ipsum, unde non!</p>
                    </div>
                    <div className="task-req">
                        <p>Arabic</p>
                        <p>English</p>
                        <p>Email Support</p>
                        <p>Customer Support</p>
                        <p>Email Communication</p>
                    </div>
                </div>

                <div className="task">
                    <div className="task-time text-[.8rem] text-[gray]">
                        <p>Posted 26 minutes ago</p>
                    </div>
                    <div className="task-title">
                        <h2 className="text-3xl font-bold">Email Support Analyst</h2>
                    </div>
                    <div className="task-details">
                        <p className="text-[1rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sint animi illum ipsam consequatur eius corrupti repudiandae corporis dolor doloribus accusamus quam ipsum, unde non!</p>
                    </div>
                    <div className="task-req">
                        <p>Arabic</p>
                        <p>English</p>
                        <p>Email Support</p>
                        <p>Customer Support</p>
                        <p>Email Communication</p>
                    </div>
                </div>

                <div className="task">
                    <div className="task-time text-[.8rem] text-[gray]">
                        <p>Posted 26 minutes ago</p>
                    </div>
                    <div className="task-title">
                        <h2 className="text-3xl font-bold">Email Support Analyst</h2>
                    </div>
                    <div className="task-details">
                        <p className="text-[1rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sint animi illum ipsam consequatur eius corrupti repudiandae corporis dolor doloribus accusamus quam ipsum, unde non!</p>
                    </div>
                    <div className="task-req">
                        <p>Arabic</p>
                        <p>English</p>
                        <p>Email Support</p>
                        <p>Customer Support</p>
                        <p>Email Communication</p>
                    </div>
                </div>

                <div className="task">
                    <div className="task-time text-[.8rem] text-[gray]">
                        <p>Posted 26 minutes ago</p>
                    </div>
                    <div className="task-title">
                        <h2 className="text-3xl font-bold">Email Support Analyst</h2>
                    </div>
                    <div className="task-details">
                        <p className="text-[1rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sint animi illum ipsam consequatur eius corrupti repudiandae corporis dolor doloribus accusamus quam ipsum, unde non!</p>
                    </div>
                    <div className="task-req">
                        <p>Arabic</p>
                        <p>English</p>
                        <p>Email Support</p>
                        <p>Customer Support</p>
                        <p>Email Communication</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks