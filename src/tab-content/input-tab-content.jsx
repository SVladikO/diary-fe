import './input-tab-content.css';

const InputTabContent = () => {
    return (
        <div className="Wrapper">
            <div className="FirstRowInputs">
                <input type="text" placeholder='10/03/2026' className="InputInline"/>
                <input type="text" placeholder='Location' className="InputInline"/>
                <div className='MoodCircleWrapper'>
                    <div className='MoodCircle MoodCircleGood'></div>
                    <div className='MoodCircle MoodCircleBad'></div>
                    <div className='MoodCircle MoodCircleNeutral'></div>
                </div>
                <input type="text" placeholder='Key' className="InputInline"/>
            </div>
            <textarea rows={5} placeholder='Diary' className='InputBlock'/>
            <textarea rows={5} placeholder='GPT conclusion' className='InputBlock'/>
            <button className='PrimaryButton'>Write</button>
        </div>
    )
}

export default InputTabContent;