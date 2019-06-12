import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './static/assets/App.css';
import Champion from './components/Champion';
import Score from './components/Score';
import Request from 'react-http-request'

class App extends Champion {
  constructor(){
    super();
    this.state = {
     keyword:'',
     calculated : false,
     teamQuery:'',
     blueTeam : [0,0,0,0,0],
     redTeam : [0,0,0,0,0],
     whichNumber : 0,
     whichTeam : 0,

    searchedChampions:[], 
    champions:[
      {
        id : 0,
       name : "Random"
       ,name2 : "����"
     },
 
     {
       id : 1,
      name : "Garen"
      ,name2 : "����"
    },
    {
     id : 2,
     name : "Galio"
     ,name2 : "������"
    },
    {
      id : 3,
      name : "Gangplank"
      ,name2 : "���÷�ũ"
     },
     {
      id : 4,
      name : "Gragas"
      ,name2 : "�׶󰡽�"
     },
     {
     id : 5,
     name : "Graves"
     ,name2 : "�׷��̺���"
    },
    {
      id : 6,
     name : "Gnar"
     ,name2 : "����"
    },
   {
    id : 7,
    name : "Nami"
    ,name2 : "����"
  },
   {
    id : 8,
    name : "Nasus"
    ,name2 : "������"
  },
   {
    id : 9,
    name : "Nautilus"
    ,name2 : "��ƿ����"
  },
   {
    id : 10,
    name : "Nocturne"
    ,name2 : "����"
  },
   {
    id : 11,
   name : "Nunu"
   ,name2 : "������ ������"
  },
 {
  id : 12,
  name : "Nidalee"
  ,name2 : "�ϴ޸�"
},
 {
  id : 13,
  name : "Neeko"
  ,name2 : "����"
},
 {
  id : 14,
  name : "Darius"
  ,name2 : "�ٸ��콺"
},
 {
   id : 15,
  name : "Diana"
  ,name2 : "���ֳ̾�"
},
{
 id : 16,
 name : "Draven"
 ,name2 : "�巹�̺�"
},
{
 id : 17,
 name : "Ryze"
 ,name2 : "������"
},
{
 id : 18,
 name : "Rakan"
 ,name2 : "��ĭ"
},
{
 id : 19,
 name : "Rammus"
 ,name2 : "���ӽ�"
} ,{
  id : 20,
 name : "Lux"
 ,name2 : "����"
},
{
id : 21,
name : "Rumble"
,name2 : "����"
},
{
id : 22,
name : "Renekton"
,name2 : "������"
},
{
id : 23,
name : "Leona"
,name2 : "������"
},
{
 id : 24,
name : "RekSai"
,name2 : "������"
},
{
id : 25,
name : "Rengar"
,name2 : "����"
},
{
id : 26,
name : "Lucian"
,name2 : "��þ�"
},
{
id : 27,
name : "Lulu"
,name2 : "���"
},
{
id : 28,
name : "Leblanc"
,name2 : "�����"
} ,
{
  id : 29,
 name : "LeeSin"
 ,name2 : "����"
},
{
id : 30,
name : "Riven"
,name2 : "����"
},
{
id : 31,
name : "Lissandra"
,name2 : "������"
},
{
id : 32,
name : "MasterYi"
,name2 : "��������"
},
{
 id : 33,
name : "Maokai"
,name2 : "����ī��"
},
{
id : 34,
name : "Malzahar"
,name2 : "������"
},
{
id : 35,
name : "Malphite"
,name2 : "������Ʈ"
},
{
id : 36,
name : "Mordekaiser"
,name2 : "��ī����"
},
{
id : 37,
name : "Morgana"
,name2 : "�𸣰���"
},
{
  id : 38,
 name : "DrMundo"
 ,name2 : "�����ڻ�"
},
{
id : 39,
name : "MissFortune"
,name2 : "�̽�����"
},
{
id : 40,
name : "Bard"
,name2 : "�ٵ�"
},
{
id : 41,
name : "Varus"
,name2 : "�ٷ罺"
},
{
 id : 42,
name : "Vi"
,name2 : "����"
},
{
id : 43,
name : "Veigar"
,name2 : "���̰�"
},
{
id : 44,
name : "Vayne"
,name2 : "����"
},
{
id : 45,
name : "Velkoz"
,name2 : "������"
},
{
id : 46,
name : "Volibear"
,name2 : "��������"
},
{
id : 47,
name : "Braum"
,name2 : "����"
},
{
id : 48,
name : "Brand"
,name2 : "�귣��"
},
{
id : 49,
name : "Vladimir"
,name2 : "����̸�"
},
{
id : 50,
name : "Blitzcrank"
,name2 : "����ũ��ũ"
},
{
id : 51,
name : "Viktor"
,name2 : "���丣"
},
{
id : 52,
name : "Poppy"
,name2 : "�Ǻ�"
},
{
  id : 53,
  name : "Sion"
  ,name2 : "���̿�"
},
  {
id : 54,
name : "Sylas"
,name2 : "���Ϸ���"
},
{
id : 55,
name : "Shaco"
,name2 : "����"
},
{
id : 56,
name : "Sejuani"
,name2 : "���־ƴ�"
},
{
id : 57,
name : "Sona"
,name2 : "�ҳ�"
},
{
id : 58,
name : "Soraka"
,name2 : "�Ҷ�ī"
},
{
id : 59,
name : "Shen"
,name2 : "��"
},
{
id : 60,
name : "Shyvana"
,name2 : "���ٳ�"
},
{
id : 61,
name : "Swain"
,name2 : "������"
},
{
id : 62,
name : "Skarner"
,name2 : "��ī��"
},
{
id : 63,
name : "Sivir"
,name2 : "�ú�"
},
{
id : 64,
name : "XinZhao"
,name2 : "��¥��"
} ,
{
id : 65,
name : "Syndra"
,name2 : "�ŵ��"
},
{
id : 66,
name : "Singed"
,name2 : "������"
},
{
id : 67,
name : "Thresh"
,name2 : "������"
},
{
id : 68,
name : "Ahri"
,name2 : "�Ƹ�"
},
{
id : 69,
name : "Amumu"
,name2 : "�ƹ���"
},
{
id : 70,
name : "AurelionSol"
,name2 : "�ƿ췼���¼�"
},
{
id : 71,
name : "Ivern"
,name2 : "���̹�"
},
{
id : 72,
name : "Azir"
,name2 : "������"
},
{
id : 73,
name : "Akali"
,name2 : "��Į��"
},
{
  id : 74,
  name : "Aatrox"
  ,name2 : "��Ʈ�Ͻ�"
},
 {
  id : 75,
  name : "Alistar"
  ,name2 : "�˸���Ÿ"
},
 {
  id : 76,
  name : "Annie"
  ,name2 : "�ִ�"
},
 {
   id : 77,
  name : "Anivia"
  ,name2 : "�ִϺ��"
},
{
 id : 78,
 name : "Ashe"
 ,name2 : "�ֽ�"
},
{
 id : 79,
 name : "Yasuo"
 ,name2 : "�߽���"
},
{
 id : 80,
 name : "Ekko"
 ,name2 : "����"
},
{
 id : 81,
 name : "Elise"
 ,name2 : "������"
} ,{
  id : 82,
 name : "MonkeyKing"
 ,name2 : "����"
},
{
id : 83,
name : "Ornn"
,name2 : "����"
},
{
id : 84,
name : "Orianna"
,name2 : "�����Ƴ�"
},
{
id : 85,
name : "Olaf"
,name2 : "�ö���"
},
{
 id : 86,
name : "Yorick"
,name2 : "�丯"
},
{
id : 87,
name : "Udyr"
,name2 : "���"
},
{
id : 88,
name : "Urgot"
,name2 : "�츣��"
},
{
id : 89,
name : "Warwick"
,name2 : "����"
},
{
id : 90,
name : "Irelia"
,name2 : "�̷�����"
} ,
{
  id : 91,
 name : "Evelynn"
 ,name2 : "�̺�"
},
{
id : 92,
name : "Ezreal"
,name2 : "�����"
},
{
id : 93,
name : "Illaoi"
,name2 : "�϶����"
},
{
id : 94,
name : "JarvanIV"
,name2 : "�ڸ���"
},
{
 id : 95,
name : "Xayah"
,name2 : "�ھ�"
},
{
id : 96,
name : "Zyra"
,name2 : "���̶�"
},
{
id : 97,
name : "Zac"
,name2 : "��ũ"
},
{
id : 98,
name : "Janna"
,name2 : "�ܳ�"
},
{
id : 99,
name : "Jax"
,name2 : "�轺"
},
{
  id : 100,
 name : "Zed"
 ,name2 : "����"
},
{
  id : 101,
  name : "Xerath"
  ,name2 : "����"
},
{
id : 102,
name : "Jayce"
,name2 : "���̽�"
},
{
id : 103,
name : "Zoe"
,name2 : "����"
},
{
id : 104,
name : "Ziggs"
,name2 : "����"
},
{
 id : 105,
name : "Jhin"
,name2 : "��"
},
{
id : 106,
name : "Zilean"
,name2 : "������"
},
{
id : 107,
name : "Jinx"
,name2 : "¡ũ��"
},
{
id : 108,
name : "Chogath"
,name2 : "�ʰ���"
},
{
id : 109,
name : "Karma"
,name2 : "ī����"
},
{
id : 110,
name : "Camille"
,name2 : "ī��"
},
{
id : 111,
name : "Kassadin"
,name2 : "ī���"
},
{
id : 112,
name : "Karthus"
,name2 : "ī����"
},
{
id : 113,
name : "Cassiopeia"
,name2 : "ī�ÿ����"
},
{
id : 114,
name : "Kaisa"
,name2 : "ī�̻�"
},
{
  id : 115,
  name : "Khazix"
  ,name2 : "ī����"
},
  {
id : 116,
name : "Katarina"
,name2 : "īŸ����"
},
{
id : 117,
name : "Kalista"
,name2 : "Į����Ÿ"
},
{
id : 118,
name : "Kennen"
,name2 : "�ɳ�"
},
{
id : 119,
name : "Caitlyn"
,name2 : "����Ʋ��"
},
{
id : 120,
name : "Kayn"
,name2 : "����"
},
{
id : 121,
name : "Kayle"
,name2 : "����"
},
{
id : 122,
name : "KogMaw"
,name2 : "�ڱ׸�"
},
{
id : 123,
name : "Corki"
,name2 : "�ڸ�Ű"
},
{
id : 124,
name : "Quinn"
,name2 : "��"
},
{
id : 125,
name : "Kled"
,name2 : "Ŭ����"
},
{
id : 126,
name : "Kindred"
,name2 : "Ų�巹��"
} ,
{
id : 127,
name : "Taric"
,name2 : "Ÿ��"
},
{
id : 128,
name : "Talon"
,name2 : "Ż��"
},
{
id : 129,
name : "Taliyah"
,name2 : "Ż����"
},
{
id : 130,
name : "TahmKench"
,name2 : "Ž��ġ"
},
{
id : 131,
name : "Trundle"
,name2 : "Ʈ����"
},
{
id : 132,
name : "Tristana"
,name2 : "Ʈ����Ÿ��"
},
{
id : 133,
name : "Tryndamere"
,name2 : "Ʈ���ٹ̾�"
},
{
id : 134,
name : "TwistedFate"
,name2 : "Ʈ����Ƽ������Ʈ"
},
{
id : 135,
name : "Twitch"
,name2 : "Ʈ��ġ"
},           
{
id : 136,
name : "Teemo"
,name2 : "Ƽ��"
},
{
id : 137,
name : "Pyke"
,name2 : "����ũ"
},
{
  id : 138,
  name : "Pantheon"
  ,name2 : "���׿�"
},
  {
  id : 139,
  name : "Fiddlesticks"
  ,name2 : "�ǵ齺ƽ"
},
  {
    id : 140,
    name : "Fiora"
    ,name2 : "�ǿ���"
  },
    {
    id : 141,
    name : "Fizz"
    ,name2 : "����"
  },
    {
      id : 142,
      name : "Heimerdinger"
      ,name2 : "���̸ӵ���"
      },
      {
      id : 143,
      name : "Hecarim"
      ,name2 : "��ī��"
      }
      ]
   };
   this.keyWordChange = this.keyWordChange.bind(this);
   this.imageClick = this.imageClick.bind(this);
  }
  imageClick = (id) =>{
    if(this.state.blueTeam.includes(id))
    {
      alert('The Champion is already selected in Blue!!')
      return;
    }
    if(this.state.redTeam.includes(id))
    {
      alert('The Champion is already selected in Red!!')
      return;
    }
    if(this.state.whichNumber==5)
    {
      alert('full count')
      return;
    }
    if(this.state.whichTeam == 0)
    {
      this.state.blueTeam[this.state.whichNumber]=id;
      this.state.whichTeam = 1;
    }
    else
    {
      this.state.redTeam[this.state.whichNumber]=id;
      this.state.whichTeam = 0;
      this.state.whichNumber = this.state.whichNumber+1
    }
    if(this.state.whichNumber==5)
    {
       this.state.calculated=true;
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  keyWordChange(e){
    this.setState({
      keyword:e.target.value
    })
  }
   
  _renderChamps = (ASD) => {
    this.state.keyword = this.state.keyword.toLowerCase()
    const champions = ASD.map((champ,index) => {
      if(champ.name2.indexOf(this.state.keyword)+champ.name.toLowerCase().indexOf(this.state.keyword) <= -2)
      {
        return null;
      }
      if(champ.id==0)
      {
        return null;
      }
      else{
        return (
          <img className="champImage"  src={'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/'+String(champ.name)+'.png'}
          onClick={()=>this.imageClick(index)}
          value={this.state.redTeam[0]}
          ></img>
        ) //�� 
     }
    })
    return champions
  }
  _renderTeam = (team) => {
    const champions = team.map((champ,index) => {
      if(this.state.champions[champ].id==0)
      {
        return null;
      }
      else{
      return <Champion 
          team = '1'
          title={this.state.champions[champ].name} 
          image={'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/'+String(this.state.champions[champ].name)+'.png'}
          number={this.state.champions[champ].id}
          key={index}/>
    }})
    return champions
  }
  refresh = () => {
    this.state.blueTeam = [0,0,0,0,0]
    this.state.redTeam = [0,0,0,0,0]
    this.state.whichNumber=0
    this.state.whichTeam=0
    this.state.calculated=false
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  _renderScore = (blue,red) => {
    this.state.teamQuery = 'id=['
    for(var i=0;i<5;i++)
      this.state.teamQuery = this.state.teamQuery + String(blue[i])+','
    this.state.teamQuery = this.state.teamQuery+'-1,'
   for(var i=0;i<4;i++)
      this.state.teamQuery = this.state.teamQuery + String(red[i])+','
   this.state.teamQuery = this.state.teamQuery+String(red[4])+']'
      return <Score 
    teamQuery={this.state.teamQuery}
    />
  }
  render() { //() => �� ���� �ǹ�????
    return (
      <div className="main">
         <div className="blueTeam">
            {this._renderTeam(this.state.blueTeam)}
         </div>
          
         <div className="redTeam">
            {this._renderTeam(this.state.redTeam)}
        </div>

        <div className="centerBoard">
           
           <div className="scoreBoard">
           {this.state.calculated ? this._renderScore(this.state.blueTeam,this.state.redTeam) : 'Champions should be selected'}
          </div>
          <div className='searchBox'>
            <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.keyWordChange}></input>
            <button onClick={this.refresh}> Again </button>
         </div>
          <div className="selectBox">
            {this._renderChamps(this.state.champions)}
          </div>  
        </div>
    
      </div> 
    );
  }
}
export default App;
