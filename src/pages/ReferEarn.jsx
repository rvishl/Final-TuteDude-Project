import '../styled/styled1.css'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
const ReferEarn = _ => {
    return (
        <>
            <div className="refer_container">
                <div className="refer_wrapper">
                    <div className="refer_top_section">
                        <div className="refer_top_section_left">
                            <div className="refer_top_section_left_top">
                                <div className="refer_top_section_left_top_parent">
                                    <div className="refer_top_section_left_top_child1">Referral Earning</div>
                                    <div className="refer_top_section_left_top_child2">₹ 2,500</div>
                                </div>
                                <div className="refer_top_section_left_top_parent">
                                    <div className="refer_top_section_left_top_child1">Total Referrals</div>
                                    <div className="refer_top_section_left_top_child2">7</div>
                                </div>
                                <div className="refer_top_section_left_top_parent">
                                    <div className="refer_top_section_left_top_child1">Wallet Balance</div>
                                    <div className="refer_top_section_left_top_child2">₹ 500</div>
                                </div>
                                <div className="refer_top_section_left_top_parent button-container">
                                    <div className="refer_top_section_left_bottom_parent">
                                        Withdraw Balance
                                    </div>
                                </div>                                
                            </div>                            
                        </div>
                        <div className="refer_top_section_right">
                            <div className="refer_top_section_right_top">Your Referral Code</div>
                            <div className="refer_top_section_right_bottom">
                                <div className="refer_top_section_right_bottom_parent">
                                    <span>E</span>
                                    <span>D</span>
                                    <span>C</span>
                                    <span>H</span>
                                    <span>5</span>
                                    <span>4</span>
                                    {/* E &nbsp;&nbsp; D &nbsp;&nbsp; C &nbsp;&nbsp; H &nbsp;&nbsp; 5 &nbsp;&nbsp; 4 */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="refer_middle_section">
                       <div className='middle-top'>
                            <div className='m-top-title'>
                                How does it work
                            </div>
                       </div>
                       <div className='middle-bottom'>
                            <div className='bottom-container'>
                                <div className='bottom-img'>
                                    <img src={img1} alt="no-img" />
                                </div>
                                <div className='bottom-content'>
                                    <div className='content-data1'>Invite your Friends</div>
                                    <div className='content-data2'>Share the link tutedude.com with your friends</div>
                                </div>
                            </div>
                            <div className='bottom-container'>
                                <div className='bottom-img'>
                                    <img src={img2} alt="no-img" />
                                </div>
                                <div className='bottom-content'>
                                    <div className='content-data1'>Friend purchases any course</div>
                                    <div className='content-data2'>Using your REFERRAL CODE in the payments page</div>
                                </div>
                            </div>
                            <div className='bottom-container'>
                                <div className='bottom-img'>
                                    <img src={img3} alt="no-img" />
                                </div>
                                <div className='bottom-content'>
                                    <div className='content-data1'>You get ₹ 200 as referral money</div>
                                    <div className='content-data2'>On total purchase the friend makes, into your wallet</div>
                                </div>
                            </div>
                            <div className='bottom-container'>
                                <div className='bottom-img'>
                                    <img src={img4} alt="no-img" />
                                </div>
                                <div className='bottom-content'>
                                    <div className='content-data1'>Your Friend gets ₹ 200 off</div>
                                    <div className='content-data2'>On his overall fee on successful purchase using your referral code</div>
                                </div>
                            </div>
                            <div className='bottom-container'>
                                <div className='bottom-img'>
                                    <img src={img5} alt="no-img" />
                                </div>
                                <div className='bottom-content'>
                                    <div className='content-data1'>Transfer money from wallet</div>
                                    <div className='content-data2'>When the wallet balance reaches ₹200 or more, you can withdraw it</div>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="refer_bottom_section">
                        <div className='refer_bottom-container'>
                            <div className='refer_bottom-subcontainer1'>Friends Who Enrolled</div>
                            <div className='refer_bottom-subcontainer2'>Terms & Conditions</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferEarn;