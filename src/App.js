import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carusel'
import NumbersTable from './components/NumbersTable/NumbersTable';
import Facebook from './components/Facebook/Facebook';

function App() {
  return (
    <div className="App">
      <div className="iteration1">
        <h3>Iteration 1</h3>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className="iteration2">
        <h3>Iteration 2</h3>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div className="iteration3">
        <h3>Iteration 3</h3>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div className="iteration4">
        <h3>Iteration 4</h3>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <div>
        <h3>Iteration 5</h3>
        <div className="iteration5">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />

          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />

          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>

      <div className="iteration6">
        <h3>Iteration 6</h3>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div className="iteration7">
        <h3>Iteration 7</h3>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>

      <div className="iteration8">
        <h3>Iteration 8</h3>
        <LikeButton />
      </div>

      <div className="iteration9">
        <h3>Iteration 9</h3>
        <ClickablePicture 
          img="maxence.png" 
          imgClicked="maxence-glasses.png" 
        />
      </div>

      <div className="iteration10">
        <h3>Iteration 10</h3>
        <Dice />
      </div>

      <div className="iteration11">
        <h3>Iteration 11</h3>
        <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
/>
      </div>

      <div className="iteration12">
        <h3>Iteration 12</h3>
        <NumbersTable limit={12} />
      </div>

      <div className="iteration13">
        <h3>Iteration 13</h3>
        <Facebook />
      </div>

    </div>
  );
}

export default App;
