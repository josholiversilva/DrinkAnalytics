import React, { useState } from 'react'

const VisualBar = ({ currVis, vis, visMap, onHandleChangeVis }) => {
    return(
      <>
      { 
        currVis === vis ?
          <button onClick={() => onHandleChangeVis(visMap[currVis])} className={`text-black text-center w-1/2 h-8 rounded-r-md mt-4 bg-[#95c4de] shadow-md`}>
            <div>
              {vis}
            </div>
          </button> 
        :
          <>
            <div className="flex mt-4">
              <button onClick={() => onHandleChangeVis(vis)} className={`text-center w-8 h-8 rounded-r-md bg-white`} />
              <div className={`text-white ml-2 text-sm`}>
                {vis}
              </div>
            </div>
          </>
      }
      </>
    )
}

export default VisualBar;