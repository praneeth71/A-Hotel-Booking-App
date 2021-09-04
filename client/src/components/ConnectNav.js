import { Card, Avatar } from "antd";
import moment from 'moment';
import { useSelector } from "react-redux";

const {Meta} = Card;

const ConnectNav = () => {
    const {auth} = useSelector((state) => ({...state}));
    const {user2} = auth;
    return (
        <div className="d-flex justify-content-around">
             <Card>
                <Meta avatar={<Avatar>{user2.name[0]}</Avatar>} title={user2.name} description={`Joined ${moment(user2.createdAt).fromNow()}`}/> 
             </Card>
             
            {auth && auth.user2 && auth.user2.stripe_seller && auth.user2.stripe_seller.charges_enabled && <>
                  <h5>Pending balance</h5>
                  <h5>Payout settings</h5>
            </>}
        </div>
    );
};

export default ConnectNav;