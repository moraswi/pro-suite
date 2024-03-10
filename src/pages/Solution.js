import React from 'react'
import "../styles/Solution.css"
export default function Solution() {
  return (
    <div className='mainSolutionContainer'>

      <div>
      <h1>
       <span className="vertical-line"></span>
        <span className="why-text">Our</span>{' '}
        <span className="prosuite-text">Solution</span>
      </h1>
      </div>

      <div className='solutionItem'>
        <div className='solutionItemContainer'>
            <div className='solutionVerticalWhiteLine'></div>
                <div>
                    <h3 className='solutionTitle'>Asset Management</h3>
                    <p className='solutionContent'>Gain control of your asset with Software that helps you keep track of your physical assets.</p>
                    <button className='button'>LEARN MORE</button>
                </div>
            </div>

            <div className='solutionItemContainer'>
                <div className='solutionVerticalGreyLine'></div>
                    <div>
                        <h3 className='solutionTitle'>Risk Management</h3>
                        <p className='solutionContent'>Identify, capture and monitor enterprise risks with ease.</p>
                        <button className='button'>LEARN MORE</button>
                    </div>
            </div>

            <div className='solutionItemContainer'>
                <div className='solutionVerticalGreyLine'></div>
                    <div>
                        <h3 className='solutionTitle'>Documents Management</h3>
                        <p className='solutionContent'>Easy-to-use solution that enables your firm to convert paper into electronic files.</p>
                        <button className='button'>LEARN MORE</button>
                    </div>
            </div>
  
      <div className='solutionItemContainer'>
         <div className='solutionVerticalWhiteLine'></div>
            <div>
                <h3 className='solutionTitle'> Perfomance Management</h3>
                <p className='solutionContent'>Achieve business stragetic goals with a solution ensuring organizations are running effenciently</p>
                <button className='button'>LEARN MORE</button>
            </div>
        </div>

            <div className='solutionItemContainer'>
                <div className='solutionVerticalGreyLine'></div>
                    <div>
                        <h3 className='solutionTitle'>Audit </h3>
                        <p className='solutionContent'>Streamline your audit processes and comply with regulations or internal policies.</p>
                        <button className='button'>LEARN MORE</button>
                    </div>
            </div>

            <div className='solutionItemContainer'>
                <div className='solutionVerticalGreyLine'></div>
                    <div>
                        <h3 className='solutionTitle'>Compliance Management</h3>
                        <p className='solutionContent'>Manage and meet legal requirements and comply with applicable laws and regulations.</p>
                        <button className='button'>LEARN MORE</button>
                    </div>
            </div>
      </div>
    </div>
  )
}
