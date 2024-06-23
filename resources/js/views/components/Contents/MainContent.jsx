import React from "react";

export default function MainContent() {
    return (
        <div className="card lg:card-side  mx-16 my-8">
            <figure className="w-2/2 h-80">
                <img
                    src="https://miro.medium.com/v2/resize:fit:3200/format:webp/1*c7CPwH-Dd-z-EuXCWt-nTQ.png"
                    alt="Album"
                />
            </figure>
            <div className="w-1/2 flex flex-col mx-8">
                <h2 className="font-bold text-3xl mt-5">The Main Article</h2>
                <p className="text-blue-500 mt-2.5">catergory</p>
                <p className="mt-2.5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                </p>
                <div className="author mt-2.5 flex items-center ">
                    <div className="avatar">
                        <div className="h-12 w-12 mask mask-squircle mt-2.5">
                            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" />
                        </div>
                    </div>
                    <div className="author-details mx-2.5 ">
                        <p className="mt-1 text-blue-500 text-sm">
                            Anthony Esquilona
                        </p>
                        <p className="text-sm">Jun 23</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
