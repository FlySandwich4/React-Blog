import { useState } from 'react';
import './templates_css/TCodeBox.css'

const TCodeBox = (props) => {
    const [isFold, setIsFold] = useState(false);
    const toggleFold = () => {
        setIsFold(!isFold);
    }
    const codeTitle = props.title;
    const codeContent = String(props.content);
    
    return ( 
        <div className='TCodeBox_CodeBlock'>
            {/* title bar, the black bar part */}
            <div className='TCodeBox_TitleBar'>
                <div className='TCodeBox_Title'>{codeTitle}</div>
                <div className='TCodeBox_FillSpace'></div>
                <button className='TCodeBox_FoldButton' onClick={toggleFold}>
                    {isFold ? 'UnFold' : 'Fold'}
                </button> 
            </div>
            {/* content, the codes part */}
            <pre className={isFold? 'TCodeBox_CodeContent TCodeBox_CloseCodeContent' : 'TCodeBox_CodeContent TCodeBox_OpenCodeContent'}>{codeContent}</pre>
        </div>
    );
}
 
export default TCodeBox;