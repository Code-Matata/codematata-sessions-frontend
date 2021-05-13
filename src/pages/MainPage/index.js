import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <div className="h-screen bg-gray-50  ">
        <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col justify-center items-center sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center h-screen">
          <h2 className="text-center  font-extrabold tracking-tight  ">
            <span className="block text-indigo-600 text-5xl">
              CodeMatata Sessions
            </span>

            <span className="block text-xl text-gray-700 m-4">
              Join a vibrant community of programmers and share coding
              knowledge.
            </span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center lg:mt-0 lg:flex-shrink-0">
            <input
              className="mx-4 border-2  border-indigo-600 w-64 rounded-md pl-4 h-12 active:border-1 active:border-indigo-500 "
              placeholder="yours@email.com"
              type="email"
            ></input>
            <div className="inline-flex rounded-md shadow cursor-pointer h-12 mt-8 sm:mt-0">
              <p className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Join the waitlist
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
