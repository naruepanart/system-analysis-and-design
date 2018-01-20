var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');


var Page1 = React.createClass({
    renderToolbar: function() {
        return (
            <Ons.Toolbar>
            <div className='left'><Ons.BackButton>กลับ</Ons.BackButton></div>
        <div className='center'>รายการสินค้า</div>
            </Ons.Toolbar>
    )
    },


    render: function() {

        function handleClick(id,amount,price,title) {
            return function () {
                client({method: 'GET', path: '/bill/'+id+'/amount/'+amount+'/price/'+price+'/title/'+title}).done(
                    ons.notification.confirm('ยืนยันการเลือกสินค้า')

                )}
        }
        function handleClick2(id,amount,price,title) {
            return function () {
                client({method: 'GET', path: '/bill/'+id+'/amount/'+amount+'/price/'+price+'/title/'+title}).done(
                    ons.notification.confirm('ยืนยันการเลือกสินค้า')

                )}
        }



        return(
            <Ons.Page renderToolbar={this.renderToolbar}>
    <Ons.List
        renderHeader={() => <Ons.ListHeader>รายการ</Ons.ListHeader>}
        />

        <div className='center'>1.กล่องฝาชน (สีน้ำตาล) | จำนวนชิ้น | ราคา </div>
        <div className="content">
            <Ons.List>
            <Ons.ListItem onClick={handleClick(1,1,10,"กล่องฝาชน (สีน้ำตาล)")}>
    <div style={{textAlign: 'center'}}>1 ชิ้น - 10 บาท</div>

        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(1,2,20,"กล่องฝาชน (สีน้ำตาล)")}>
    <div style={{textAlign: 'center'}}>2 ชิ้น - 20 บาท</div>

        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(1,3,30,"กล่องฝาชน (สีน้ำตาล)")}>
    <div style={{textAlign: 'center'}}>3 ชิ้น - 30 บาท</div>
        </Ons.ListItem>
        </Ons.List>
        <br/>
        </div>

        <div className="title right">2.กล่องไดคัท (สีขาว)</div>
        <div className="content">
            <Ons.List>
            <Ons.ListItem onClick={handleClick(2,1,10,"กล่องไดคัท (สีขาว)")}>
    <div style={{textAlign: 'center'}}>1 ชิ้น - 10 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(2,2,20,"กล่องไดคัท (สีขาว)")}>
    <div style={{textAlign: 'center'}}>2 ชิ้น - 20 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(2,3,30,"กล่องไดคัท (สีขาว)")}>
    <div style={{textAlign: 'center'}}>3 ชิ้น - 30 บาท</div>
        </Ons.ListItem>
        </Ons.List>
        <br/>
        </div>

        <div className="title right">3.ซองเอกสาร</div>
        <div className="content">
            <Ons.List>
            <Ons.ListItem onClick={handleClick(3,1,10,"ซองเอกสาร")}>
    <div style={{textAlign: 'center'}}>1 ชิ้น - 10 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(3,2,20,"ซองเอกสาร")}>
    <div style={{textAlign: 'center'}}>2 ชิ้น - 20 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(3,3,30,"ซองเอกสาร")}>
    <div style={{textAlign: 'center'}}>3 ชิ้น - 30 บาท</div>
        </Ons.ListItem>
        </Ons.List>
        <br/>
        </div>

        <div className="title right">4.ซองพลาสติก</div>
        <div className="content">
            <Ons.List>
            <Ons.ListItem onClick={handleClick(4,1,10,"ซองพลาสติก")}>
    <div style={{textAlign: 'center'}}>1 ชิ้น - 10 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(4,2,20,"ซองพลาสติก")}>
    <div style={{textAlign: 'center'}}>2 ชิ้น - 20 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(4,3,30,"ซองพลาสติก")}>
    <div style={{textAlign: 'center'}}>3 ชิ้น - 30 บาท</div>
        </Ons.ListItem>
        </Ons.List>
        <br/>
        </div>

        <div className="title right">5.ซองกันกระแทก</div>
        <div className="content">
            <Ons.List>
            <Ons.ListItem onClick={handleClick(5,1,10,"ซองกันกระแทก")}>
    <div style={{textAlign: 'center'}}>1 ชิ้น - 10 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(5,2,20,"ซองกันกระแทก")}>
    <div style={{textAlign: 'center'}}>2 ชิ้น - 20 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(5,3,30,"ซองกันกระแทก")}>
    <div style={{textAlign: 'center'}}>3 ชิ้น - 30 บาท</div>
        </Ons.ListItem>
        </Ons.List>
        <br/>
        </div>

        <div className="title right">6.เชือกเกลียว</div>
        <div className="content">
            <Ons.List>
            <Ons.ListItem onClick={handleClick(6,1,10,"เชือกเกลียว")}>
    <div style={{textAlign: 'center'}}>1 ชิ้น - 10 บาท </div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(6,2,20,"เชือกเกลียว")}>
    <div style={{textAlign: 'center'}}>2 ชิ้น - 20 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(6,3,30,"เชือกเกลียว")}>
    <div style={{textAlign: 'center'}}>3 ชิ้น - 30 บาท</div>
        </Ons.ListItem>
        </Ons.List>
        <br/>
        </div>

        <div className="title right">7.เทปกาว</div>
        <div className="content">
            <Ons.List>
            <Ons.ListItem onClick={handleClick(7,1,10,"เทปกาว")}>
    <div style={{textAlign: 'center'}}>1 ชิ้น - 10 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(7,2,20,"เทปกาว")}>
    <div style={{textAlign: 'center'}}>2 ชิ้น - 20 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(7,3,30,"เทปกาว")}>
    <div style={{textAlign: 'center'}}>3 ชิ้น - 30 บาท </div>
        </Ons.ListItem>
        </Ons.List>
        <br/>
        </div>

        <div className="title right">8.แอร์บับเบิ้ล</div>
        <div className="content">
            <Ons.List>
            <Ons.ListItem onClick={handleClick(8,1,10,"แอร์บับเบิ้ล")}>
    <div style={{textAlign: 'center'}}>1 ชิ้น - 10 บาท</div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(8,2,20,"แอร์บับเบิ้ล")}>
    <div style={{textAlign: 'center'}}>2 ชิ้น - 20 บาท </div>
        </Ons.ListItem>
        <Ons.ListItem onClick={handleClick(8,3,30,"แอร์บับเบิ้ล")}>
    <div style={{textAlign: 'center'}}>3 ชิ้น - 30 บาท</div>
        </Ons.ListItem>
        </Ons.List>
        <br/>
        </div>

        <Ons.Button style={{margin: '6px'}} onClick={this.handleClick}>ใบเสร็จ</Ons.Button>





        </Ons.Page>
    )
    }
});

class Home extends React.Component {
    renderToolbar() {
        return (
            <Ons.Toolbar>
            <div className='center'>จำหน่ายกล่องพัสดุ</div>
            <div className='right'>

            </div>
            </Ons.Toolbar>
    );
    }

    showMenu() {
        this.props.showMenu();
    }

    pushPage() {
        this.props.navigator.pushPage({ component: Page1, props: { key: 'Page1' } });
    }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
    <div style={{ textAlign: 'center' }}>
    <br />
        <div style={{margin: 20}}>
    <img src={`https://upload.wikimedia.org/wikipedia/commons/0/00/Box_cyan.png`} style={{width: '50%'}} />
        </div>
        <Ons.Button onClick={this.pushPage.bind(this)}>
        เข้าสู่ระบบv2
        </Ons.Button>
        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
        สำหรับพนักงานเท่านั้น
        </p>
        </Ons.Page>
    );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.loadPage = this.loadPage.bind(this);
    }

    hide() {
        this.setState({ isOpen: false });
    }

    show() {
        this.setState({ isOpen: true });
    }

    loadPage(page) {
        this.hide();
        this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
    }

    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;
        route.props.showMenu = this.show.bind(this);

        return React.createElement(route.component, route.props);
    }

    render() {
        return (
            <Ons.Splitter>
            <Ons.SplitterSide side='right' width={220} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
    <Ons.Page>
        <Ons.List>
        <Ons.ListItem key='home' onClick={this.loadPage.bind(this, Home)} tappable>Home</Ons.ListItem>
        </Ons.List>
        </Ons.Page>
        </Ons.SplitterSide>
        <Ons.SplitterContent>
        <Ons.Navigator initialRoute={{ component: Home, props: { key: 'home' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        </Ons.SplitterContent>
        </Ons.Splitter>
    );
    }
}



ReactDOM.render(<App />, document.getElementById('react'));