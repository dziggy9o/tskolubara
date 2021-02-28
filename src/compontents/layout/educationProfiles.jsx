import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core';
import {BarChart, Check, ChevronRight, Settings, SettingsInputAntenna, Wallpaper} from '@material-ui/icons'
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import MaterialTable from "material-table";

export const EducationProfileCard = props => {
  return (
    <Card className={'education-profiles'}>
      <CardHeader
        classes={{root: 'education-profiles-header'}}
        avatar={
          <Avatar aria-label="recipe" className={'education-profiles-avatar'}>
            <IconButton aria-label="settings">
              {props.icon}
            </IconButton>
          </Avatar>
        }
        title={props.name}
      />
      <div
        className={'education-profiles-picture'}
        style={{backgroundImage: `url(${props.background})`}}
      />
      <CardContent classes={{root: 'education-profiles-description'}}>
        <List component="nav">
          {props.list.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <ListItem button classes={{root: 'whiteColor'}}>
                  <ListItemIcon classes={{root: 'whiteColor'}}>
                    <ChevronRight/>
                  </ListItemIcon>
                  <ListItemText primary={item.name}/>
                </ListItem>
              </Link>
            )
          })}
        </List>
      </CardContent>
    </Card>
  );
}

export const EducationProfileView = props => (
  <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'stats'}}>
    <Container maxWidth={'xl'}>
      {props.showTitle ?
        <Typography classes={{root: 'education-profiles-title'}} variant={'h3'} align={'center'}>Образовни
          профили</Typography>
        : null}
      <Grid container spacing={3}>
        {EducationProfileList.map((item, index) => {
          return (
            <Grid item xs={12} lg={3} md={6}>
              <EducationProfileCard key={index} {...item} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  </Container>
)

export const EducationProfileSinglePage = props => {
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'education-profiles-singlePage'}}>
      <div className={'education-profiles-singlePage-picture'} style={{backgroundImage: `url(${props.background})`}}/>
      <Container maxWidth={'lg'} classes={{root: 'education-profiles-singlePage-content'}}>
        <Typography classes={{root: 'education-profiles-singlePage-content-title'}} variant={'h5'}>{props.name}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            {props.details ?
              <Typography classes={{root: 'education-profiles-singlePage-content-text'}} variant={'h6'}>{props.details}</Typography> : null}
            {props.pageContent.intro ?
              <Typography classes={{root: 'education-profiles-singlePage-content-text'}} variant={'h6'}>{props.pageContent.intro}</Typography>
              : null}
            <List component="nav">
              {props.pageContent.list?.map((item, index) => {
                return (
                  <ListItem key={index} button classes={{root: 'whiteColor'}}>
                    <ListItemIcon classes={{root: 'whiteColor'}}>
                      <ChevronRight/>
                    </ListItemIcon>
                    <ListItemText classes={{root: 'firstWord'}} primary={item.item}/>
                  </ListItem>
                )
              })}
            </List>
            {props.pageContent.otherText ?
              <Typography classes={{root: 'education-profiles-singlePage-content-text'}} variant={'h6'} dangerouslySetInnerHTML={{__html: props.pageContent.otherText}}/> : null}
            {props.pageContent.table ?
              <EducationProfileTable data={props.pageContent.table.rows} columns={props.pageContent.table.columns} title={props.name}/> : null}
          </Grid>
          <Hidden smDown>
            <Grid item md={3}>
              <Paper elevation={3} classes={{root: 'education-profiles-singlePage-profiles-list'}}>
                <div className={'title'}>Образовни профили</div>
                <Paper classes={{root: 'quicklinks'}}>
                  <List component="nav" aria-label="main mailbox folders">
                    {EducationProfileSubList.map((item, i) => {
                      return (
                        <Link key={i} to={item.path}>
                          <ListItem button classes={{root: 'blackColor'}}>
                            <ListItemIcon classes={{root: 'blackColor'}}>
                              <ChevronRight/>
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                          </ListItem>
                        </Link>
                      )
                    })}
                  </List>
                </Paper>
              </Paper>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Container>
  )
}


const EducationProfileTable = props => {
  return (
    <MaterialTable title={`${props.title} - Стручни предмети`}
                   columns={props.columns}
                   data={props.data}
                   options={{
                     search: false,
                     paging: false,
                   }}
    />
  );
}


export const EducationProfileList = [
  {
    name      : 'Геологија, рударство и металургија',
    background: '/images/obrazovni-profili/rudarstvo.jpg',
    icon      : <Wallpaper/>,
    to        : '/geologija-rudarstvo-metalurgija',
    list      : [
      {
        name   : 'Руковалац механизацијом у површинској експлоатацији',
        details: 'Руковалац механизацијом у површинској експлоатацији рукује машинама (багерима, булдожерима, ровокопачима, скреперима, грејдерима, киперима, средствима шинског транспорта, транспортнним тракама, сепараторима, дробилицама) за откоп, утовар, истовар и транспорт материјала.',
        path   : '/rukovodilac-mehanizacijom',
      },
      {
        name   : 'Рударски техничар',
        details: 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА.',
        path   : '/rudarski-tehnicar',
      },
    ]
  },
  {
    name      : 'Машинство и обрада метала',
    background: '/images/obrazovni-profili/masinskaobradametala.jpg',
    icon      : <Settings/>,
    to        : '/masinstvo-i-obrada-metala',
    list      : [
      {
        name   : 'Машински техничар за репаратуру',
        details: 'Постављени образовни циљ је да успешно обучен машински техничар ове струке стекне потребна знања о материјалима који се користе у машинсву, савременим поступцима заваривања и другим начинима спајања материјала, избору материјала за спајање, методама контроле исправности делова, проналажењу грешака и најбољих начина за поправку – репарацију, као и знања о рачунарима и програмима AutoCAD и Solid Works које може да користи при дизајнирању оштећеног дела и његовој поправци. Школа планира да машинском техничару за репаратуру, по завршеној школи, пружи могућност полагања испита из заваривања и других начина спајања материјала и да тако добије атест заваривача. Уз проходност овог смера на више школе и факултете, као и бројне могућности запошљавања очекује се да овај смер привуче велики број нових ученика.',
        path   : '/masinski-tehnicar-za-reparaturu',
      },
      {
        name   : 'Техничар за компјутерско управљање (CNC) машина',
        details: 'Техничар за комјутерско управљање (CNC) машина је занимање будућности. Повезује познавање опште машинских знања, са познавањем технологија обраде на компјутерски управљаним струговима и глодалицама. Уз примену знања и вештина рада на рачунару, научићете да направите програм по којем ће КУМ - компјутерски управљане машине (или цнц машине) производити тражени радни део. Зато се са правом каже, да техничар за комјутерско управљање (CNC) машина, чини да машта постане стварност.',
        path   : '/tehnicar-za-kompjutersko-upravljanje-cnc-masina',
      },
    ]
  },
  {
    name      : 'Економија, право и администрација',
    background: '/images/obrazovni-profili/ekonomija.jpg',
    icon      : <BarChart/>,
    to        : '/ekonomija-pravo-administracija',
    list      : [
      {
        name   : 'Економски техничар',
        details: 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА.',
        path   : '/ekonomski-tehnicar',
      },
      {
        name   : 'Финансијски техничар',
        details: 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА.',
        path   : '/finansijski-tehnicar',
      },
    ]
  },
  {
    name      : 'Електротехника',
    background: '/images/obrazovni-profili/elektronika.jpg',
    icon      : <SettingsInputAntenna/>,
    to        : '/elektrotehnika',
    list      : [
      {
        name   : 'Електромонтер мрежа и постројења',
        details: 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА.',
        path   : '/elektromonter-mreza-i-postrojenja',
      },
      {
        name   : 'Аутоелектричар',
        details: 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА.',
        path   : '/autoelektricar',
      },
      {
        name   : 'Електротехничар рачунара',
        details: 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА.',
        path   : '/elektrotehnicar-racunara',
      },
      {
        name   : 'Електротехничар процесног управљања',
        details: 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА.',
        path   : '/elektrotehnicar-procesnog-upravljanja',
      },
    ]
  },
]

export const EducationProfileSubList = [
  {
    name       : 'Руковалац механизацијом у површинској експлоатацији',
    background : '/images/obrazovni-profili/rukovodilac-mehanizacijom.jpeg',
    details    : 'Руковалац механизацијом у површинској експлоатацији рукује машинама (багерима, булдожерима, ровокопачима, скреперима, грејдерима, киперима, средствима шинског транспорта, транспортнним тракама, сепараторима, дробилицама) за откоп, утовар, истовар и транспорт материјала.',
    pageContent: {
      intro    : 'Занимања којима се може бавити руковалац механизацијом у површинској експлоатацији:',
      list     : [
        {item: 'Руковалац опреме за бушење у подземној експлоатацији'},
        {item: 'Руковалац багера циличног деловања'},
        {item: 'Руковалац рударским тешким возилима'},
        {item: 'Руковалац једноставном рударском механизацијом'}
      ],
      otherText: 'Руковалац механизацијом у површинској експлоатацији рукује машинама (багерима, булдожерима, ровокопачима, скреперима, грејдерима, киперима, средствима шинског транспорта, транспортнним тракама, сепараторима, дробилицама) за откоп, утовар, истовар и транспорт материјала. Осим непосредног утовара руда и истовара допремљеног материјала, бави се и утврђивањем исправности радилишта, рашчишћавањем терена за минирање, физичким обезбеђивањем минског поља у свим фазама минирања, као и уситњавањем већих блокова. Такође, води рачуна о одржавању машина, проверава њихов рад, њихову исправност и отклања мање кварове. Прегледа терен и зону рада механизације. Послове обавља на отвореном простору. Изложен је буци пнеуматских алата, машина за утовар и транспорт, пумпи и компресора, па мора да носи антифоне или чепиће за уши. Такође, изложен је великим количинама прашине (која настаје од сировина и јаловине), и зато мора да носи и заштитне наочаре и респираторе. Ради у сменама, по потреби.',
      table    : {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Основе геологије',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 2,
            predmeti: 'Техничко цртање са нацртном геометријом',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 3,
            predmeti: 'Основе машинства и електротехнике',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 4,
            predmeti: 'Заштита радне и животне средине',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 5,
            predmeti: 'Оргранизација производње',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 6,
            predmeti: 'Рударски радови у површинској експлоатацији',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 7,
            predmeti: 'Машине и уређаји у површинској експлоатацији',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 8,
            predmeti: 'Практична настава',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
        ]
      }
    },
    path       : '/rukovodilac-mehanizacijom',
  },
  {
    name       : 'Рударски техничар',
    background : '/images/obrazovni-profili/rudarski-tehnicar.jpg',
    details    : 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА.',
    pageContent: {
      intro    : 'Рударски техничари на површинском копу обављају послове као што су вођа групе или бригадири и директно утичу на организовању следећих послова:',
      list     : [
        {item: 'пројектовање површинског копа'},
        {item: 'пројектовање и израда путева'},
        {item: 'прорачун бушотина за минирање'},
        {item: 'рударско мерење у површинским коповима'},
        {item: 'пројектовање и израда плана производње на површинским коповима'}
      ],
      otherText: 'Да би био остварен неометан рад термоелектрана и да би производња електричне енергије текла неометано мора се остварити потпуна производња угља на површинским коповима. Кључну улогу у функционисању површинског копа имају стручњаци рударства. Школовање за рударског техничара траје четири године и у том периоду се ученици оспособљавају за организацију послова у директној производњи. Са завршеним школовањем за рударског тахничара и положеним матурским испитом добија се диплома РУДАРСКОГ ТЕХНИЧАРА. Наставак школовања је могућ на било ком техничком факултету јер је у четворогодишњем школовању стечена правилна основа за упис било ког техничког факултета а на првом месту РУДАРСКО-ГЕОЛОШКОГ факултета у Београду.',
      table    : {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'IV разред', field: 'razred4', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Основе геологије',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 2,
            predmeti: 'Техничко цртање са нацртном геометријом',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 3,
            predmeti: 'Нацртна геометрија',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 4,
            predmeti: 'Техничка механика',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 5,
            predmeti: 'Минералогија',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 6,
            predmeti: 'Основе машинства и електротехнике',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 7,
            predmeti: 'Лежишта минералних сировина',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 8,
            predmeti: 'Заштита радне и животне средине',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 9,
            predmeti: 'Организација производње',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 10,
            predmeti: 'Општи рударски радови',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 11,
            predmeti: 'Рударске машине и уређаји',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 12,
            predmeti: 'Транспорт и извор',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 13,
            predmeti: 'Проветравање и одржавање рудника',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 14,
            predmeti: 'Методе откопавања',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 15,
            predmeti: 'Геодезија са рударским мерењима',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 16,
            predmeti: 'Припрема минералних сировина',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 17,
            predmeti: 'Дубинско бушење',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 18,
            predmeti: 'Практична настава',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
        ]
      }
    },
    path       : '/rudarski-tehnicar',
  },
  {
    name       : 'Машински техничар за репаратуру',
    background : '/images/obrazovni-profili/masinski-tehnicar-za-reparaturu.png',
    details    : 'Постављени образовни циљ је да успешно обучен машински техничар ове струке стекне потребна знања о материјалима који се користе у машинсву, савременим поступцима заваривања и другим начинима спајања материјала, избору материјала за спајање, методама контроле исправности делова, проналажењу грешака и најбољих начина за поправку – репарацију, као и знања о рачунарима и програмима AutoCAD и Solid Works које може да користи при дизајнирању оштећеног дела и његовој поправци. Школа планира да машинском техничару за репаратуру, по завршеној школи, пружи могућност полагања испита из заваривања и других начина спајања материјала и да тако добије атест заваривача. Уз проходност овог смера на више школе и факултете, као и бројне могућности запошљавања очекује се да овај смер привуче велики број нових ученика.',
    pageContent: {
      intro    : 'У току четворогодишњег школовања машински техничар за репаратуру стиче потребна знања за:',
      list     : [
        {item: 'праћење радног стања машинских склопова, делова и елемената'},
        {item: 'разрађивање технолошких поступака приликом демонтаже, дефектаже и монтаже машинских склопова'},
        {item: 'примену одговарајућих метода и поступака за репарацију машинских делова и елемената'},
        {item: 'коришћење рачунара и нових метода за потребе дијагностике и репарације производа'},
        {item: 'примењивање одговарајућих програмских пакета за потребе репарације машинских делова'},
        {item: 'ефикасно и квалитетно примењивање средстава заштите на раду'},
      ],
      otherText: 'Након завршеног школовања оспособљен је да учествује у процесу развоја и изради нових производа, захваљујући обуци на лиценцираном програму Pro/Engineer Wildfire 2.0 који школа поседује и да решава проблеме концептуалног дизајна. Могућности запошљавања су у областима компјутеризована машинска обрада, процесна техника, аутомобилска индустрија и другим областима где се користе компјутеризоване технологије.Наравно, могуће је и даље школовање на неком од факултета. Настава се изводи у савременим рачунарским кабинетима (један ученик – један рачунар) уз употребу мултимедијалних наставних средстава и најсавременијих CAD/CAM програмских пакета. Примена компјутера и напредних програмских пакета ученику омогућавају истраживање,развијају креативност и подижу ефикасност,смањују моторичко напрезање при креацији модела.',
    },
    path       : '/masinski-tehnicar-za-reparaturu',
  },
  {
    name       : 'Техничар за компјутерско управљање (CNC) машина',
    background : '/images/obrazovni-profili/tehnicar-za-kompjutersko-upravljanje-cnc-masina.jpg',
    details    : 'Техничар за комјутерско управљање (CNC) машина је занимање будућности. Повезује познавање опште машинских знања, са познавањем технологија обраде на компјутерски управљаним струговима и глодалицама. Уз примену знања и вештина рада на рачунару, научићете да направите програм по којем ће КУМ - компјутерски управљане машине (или цнц машине) производити тражени радни део. Зато се са правом каже, да техничар за комјутерско управљање (CNC) машина, чини да машта постане стварност.',
    pageContent: {
      intro    : 'Током четворогодишњег програма ученици ће бити оспособљени за:',
      list     : [
        {item: 'правилну израду и коришћење техничке документације'},
        {item: 'за процес организације рада на CNC машинама'},
        {item: 'за разраду технолошких поступака обраде на КУМ машинама'},
        {item: 'за примену алата и прибора у процесу производње'},
        {item: 'за примену аутоматизације у процесу производње'},
        {item: 'за стицање знања о структури флексибилних аутоматизованих система'},
        {item: 'за примену различитих мерних метода које се користе у техничкој и метролошкој пракси'},
        {item: 'за активно коришћење рачунара приликом израде техничко-технолошке документације'},
        {item: 'за процес програмирања (G-кода) на компјутерски управљаним машинама, као и уношење и тестирање програма'},
      ],
      otherText: 'Техничар за компјутерско управљање (CNC) машина је занимање будућности. Повезује познавање опште машинских знања, са познавањем технологија обраде на компјутерски управљаним струговима и глодалицама. Уз примену знања и вештина рада на рачунару, научићете да направите програм по којем ће КУМ - компјутерски управљане машине (или CNC машине) производити тражени радни део. Зато се са правом каже, да техничар за компјутерско управљање (CNC) машина, чини да машта постане стварност.',
      table    : {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'IV разред', field: 'razred4', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Машински материјали',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 2,
            predmeti: 'Техничко цртање',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 3,
            predmeti: 'Механика',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 4,
            predmeti: 'Технологија обраде',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 5,
            predmeti: 'Машински елементи',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 6,
            predmeti: 'Организација рада',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 7,
            predmeti: 'Аутоматизација производа и флексибилан производни систем',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 8,
            predmeti: 'Хидраулика и пнеуматика',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 9,
            predmeti: 'Технологија за компјутерски управљане машине',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 10,
            predmeti: 'Програмирање за компјутерски управљиве машине',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 11,
            predmeti: 'Технолошки поступци са контролом',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 12,
            predmeti: 'Пројектовање технолошких система',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 13,
            predmeti: 'Компјутерска графика',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 14,
            predmeti: 'Моделирање машинских елемената и конструкција',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 15,
            predmeti: 'Практична настава',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : <Check/>
          },

        ]
      }
    },
    path       : '/tehnicar-za-kompjutersko-upravljanje-cnc-masina',
  },
  {
    name       : 'Економски техничар',
    background : '/images/obrazovni-profili/ekonomski-tehnicar.jpg',
    pageContent: {
      intro    : 'Економија као подручје рада у којем се образују економски техничари омогућава задовољавање интересовања ученика који су наклоњени проучавању друштвених наука. Изучавајући групу економских предмета поред опште-образовних, наши ученици стичу знања о економији као теорији и примењеној економији.',
      otherText: 'Наставним програмом за образовни профил економски техничар предвиђени су предмети којима се стичу неопходна стручна знања из економије, организације и менаџмента предузећа. Такође се кроз разне опште образовне предмете стичу општа знања и општа култура.<br/> По завршетку четворогодишњег школовања и стицањем звања економског техничара, ученици имају могућност да наставе школовање на вишим и високим школама или да се запосле у многим гранама привреде (у банци, у осигурању, у трговачким, туристичким и угоститељским предузећима...), а послови на којима економски техничар може да ради су послови у области књиговодства, рачуноводства, финансија, благајнички послови, послови економске пропаганде и сл.<br/> На радним местима на којима се запошљавају економиски техничари, већина послова се обавља на рачунарима, за шта се оспособљавају кроз програм пословне информатике у средњој школи.',
      table    : {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'IV разред', field: 'razred4', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Основи економије',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 2,
            predmeti: 'Пословна економија',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 3,
            predmeti: 'Рачуноводство',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 4,
            predmeti: 'Савремена пословна  кореспонденција',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 5,
            predmeti: 'Статистика',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 6,
            predmeti: 'Устав и привредно право',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 7,
            predmeti: 'Монетарна економија и банкарство',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 8,
            predmeti: 'Комерцијално познавање робе',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 9,
            predmeti: 'Маркетинг',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 10,
            predmeti: 'Економска географија',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 11,
            predmeti: 'Пословна информатика',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
        ]
      }
    },
    path       : '/ekonomski-tehnicar',
  },
  {
    name       : 'Финансијски техничар',
    background : '/images/obrazovni-profili/finansijski-tehnicar.jpeg',
    details    : 'Наставним програмом за овај профил предвиђени су предмети којима ученици стичу пре свега знања и вештине из финансијских области (Основи финансија, Пословне финансије, Банкарско пословање, Девизно пословање, Јавне финансије), али су предвиђени и предмети којима се стиче добра основа из опште економије (Основи економије, Пословна економија, Рачуноводство, Осигурање, Пословна информатика). Такође током школовања будући финансијски техничари стичу знања и из опште културе и образовања путем учења српског и страног језика, историје, географије, математике, биологије, кроз рад на рачунару, затим употребу различитих софтвера и др.',
    pageContent: {
      intro    : 'Финансијски техничари налазе радно место у рачуноводственим или финансијским службама предузећа, у банкама, осигуравајућим компанијама и установама. Упиши овај профил ако:',
      list     : [
        {item: 'си одговоран, тачан, спреман на тимски рад'},
        {item: 'те привлачи посао у динамичном окружењу'},
        {item: 'желиш да се у теби развије предузетнички дух'},
        {item: 'желиш да добијеш добру основу за наставак школовања на одговарајућим факултетима или високим струковним школама'},
        {item: 'по завршетку средње школе желиш да конкуришеш и запослиш се у предузећима, банкама, осигуравајућим компанијама, установама, агенцијама које пружају књиговодствене услуге.'}
      ],
      otherText: 'Прилику да провере стечена знања и вештине ученици имају на часовима блок наставе у трећем и четвртом разреду. Ови часове се реализују у банкама и осигуравајућим компанијама где ученици обављају једноставније књиговодствене и финасијске послове. <br/>Избором овога профила ученици ће стећи знања и вештине у обављању послова као што су : послови платног промета, књиговодствено обухватање дужничко - поверилачких односа, књижење трошкова пословања расхода и прихода, праћење и контрола пословања предузећа, утврђивање пословног резултата, састављање финансијских извештаја, израда различитих врста обрачуна и калкулација као и да поштују и примењују прописе и стандарде у области финансија и рачуноводства.<br/>Финансијски техничари налазе радно место у рачуноводственим или финансијским службама предузећа, у банкама, осигуравајућим компанијама и установама.',
      table    : {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'IV разред', field: 'razred4', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Основи економије',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 2,
            predmeti: 'Пословна економија',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 3,
            predmeti: 'Рачуноводство + (блок)',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 4,
            predmeti: 'Савремена пословна  кореспонденција',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 5,
            predmeti: 'Статистика',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 6,
            predmeti: 'Право',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 7,
            predmeti: 'Основи финансија',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 8,
            predmeti: 'Пословне финансије',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 9,
            predmeti: 'Јавне финансије',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 10,
            predmeti: 'Економска географија',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 11,
            predmeti: 'Финансијско пословање',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 12,
            predmeti: 'Девизно и царинско пословање',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 13,
            predmeti: 'Банкарско пословање',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 14,
            predmeti: 'Осигурање',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 15,
            predmeti: 'Пословна информатика',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
        ]
      }
    },
    path       : '/finansijski-tehnicar',
  },
  {
    name       : 'Електромонтер мрежа и постројења',
    background : '/images/obrazovni-profili/elektromonter-mreza-i-postrojenja.jpeg',
    details    : 'Образовни профили Електричар и образовни профил Електромонтер мрежа и постројења настли су у оквиру пројекта „Реформа средњег стручног образовања“ који финансира немачка влада, а спроводи Немачка организација за међународну сарадњу ГИЗ, у сарадњи са Министарством просвете, науке и технолошког развоја Републике Србије.',
    pageContent: {
      table: {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Основе електротехнике',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
          },
          {
            id      : 2,
            predmeti: 'Техничко цртање',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
          },
          {
            id      : 3,
            predmeti: 'Електрична мерења',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
          },
          {
            id      : 4,
            predmeti: 'Електроника',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
          },
          {
            id      : 5,
            predmeti: 'Економика и организација предузећа',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
          },
          {
            id      : 6,
            predmeti: 'Електричне инсталације',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
          },
          {
            id      : 7,
            predmeti: 'Електрична постројења',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
          },
          {
            id      : 8,
            predmeti: 'Електричне мреже',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
          },
          {
            id      : 9,
            predmeti: 'Практична настава',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : <Check/>,
          },
        ]
      }
    },
    path       : '/elektromonter-mreza-i-postrojenja',
  },
  {
    name       : 'Аутоелектричар',
    background : '/images/obrazovni-profili/autoelektricar.jpg',
    details    : 'Аутоелектричари одржавају електричне и електронске уређаје и инсталације у аутомобилу, монтирају и демонтирају расвету аутомобила и регулишу паљење. Дијагностикују квар на електронској опреми аутомобила и отклањају га заменом електронског склопа. Пошто модерни аутомобили имају све више електронски регулисаних функција, примена основних знања електротехнике и електронике на електричне и електронске уређаје у аутомобилу кључна је у овом занимању.',
    pageContent: {
      otherText: 'Аутоелектричари познају принцип рада електронских система и њихов је посао замена таквих система новима. Електрични уређаји које поправљају и монтирају су светла и комплетна саобраћајна сигнализација и електрични склоп паљења аутомобила. Поред препознавање електронских кварова, оспособљени су и за испитивање и замену електронских компоненти. <br/> Предвиђа се да ће убудуће у аутомобилима бити све више електронике, тако да је непрестано учење нових технологија важан део занимања.',
      table    : {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Физика',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 2,
            predmeti: 'Технички материјали',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 3,
            predmeti: 'Техничко цртање',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 4,
            predmeti: 'Основе практичних вештина',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 5,
            predmeti: 'Основе електротехнике',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 6,
            predmeti: 'Мотори са унутрашњим сагоревањем',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 7,
            predmeti: 'Моторна возила 1',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 8,
            predmeti: 'Еектрична мерења и електроника',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 9,
            predmeti: 'Електрични и елекронски системи на возилима',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 9,
            predmeti: 'Предузетништво',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 10,
            predmeti: 'Моторна возила 2 - Изборни',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 11,
            predmeti: 'Нове технологије у аутомобилској индустрији - Изборни',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
        ]
      }
    },
    path       : '/autoelektricar',
  },
  {
    name       : 'Електротехничар рачунара',
    background : '/images/obrazovni-profili/elektrotehnicar-racunara.jpg',
    details    : 'Бави се претежно хардверским делом рачунара. Ту спада одржавање и сервисирање рачунара, опреме и рачунарских система. Поправља кварове, мења делове, саставља нове рачунаре и раставља старе. Проверава рад компоненти и набавља нове (процесор, графичка картица, кулер, матична плоча, хард диск и слично.) Поред хардвера, такође ради и на софтверу, у шта спада инсталација оперативних система, разних врста програма, одржавање интернета, као и друге врсте подешавања. Будући да је свет рачунара веома динамичан и обележен честим променама, неопходно је пратити нове трендове и примењивати их у струци.',
    pageContent: {
      intro    : 'Волите ли рачунаре? Данас сви мисле да о рачунарима знају све. Ми мислимо да то није баш тако. Код нас: учите о рачунарима оно што други не знају, проучавате рачунаре кроз низ занимљивих предмета, користите рачунаре на часовима у лабораторијама и кабинетима, примењујете рачунаре у стручним предметима, одлучујете о учешћу на наградним конкурсима из области примене рачунара.',
      otherText: 'Научићете да изаберете или препоручите другима праву рачунарску конфигурацију, инсталирате разне оперативне системе, користите или пројектујете базе података за различите намене, стечена знања из других предмета примените или проверите кроз симулационе програме, рачунар искористите као моћан алат у решавању сложених задатака... Када будете спремни да кренете даље, сазнаћете шта значе скраћенице: ЕТФ, ПМФ, ФОН, РАФ, ФИТ, јер тамо наставља школовање велики број ђака који завршава овај образовни профил. Можда се радије одлучите за продају или сервис и одржавање рачунара и компонената, рад у малим или великим фирмама које све више користе рачунаре... Шта год изабрали, имајте у виду да рачунари и интернет одавно бришу просторне и вренске границе и отварају пут у сигурну будућност.',
      table    : {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'IV разред', field: 'razred4', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Физика',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 2,
            predmeti: 'Основе електротехнике',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 3,
            predmeti: 'Рачунарска графика и мултимедија',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 4,
            predmeti: 'Увод у архитектуру рачунара',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 5,
            predmeti: 'Рачунарски хардвер',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 6,
            predmeti: 'Електроника',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 7,
            predmeti: 'Софтверски алати',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 8,
            predmeti: 'Оперативни системи',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 9,
            predmeti: 'Програмирање',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 10,
            predmeti: 'Микроконтролери и микрорачунари',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 11,
            predmeti: 'Рачунарске мреже',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 12,
            predmeti: 'Рачунарска логика',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 13,
            predmeti: 'Одржавање рачунарских система',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 14,
            predmeti: 'Рачунари у системима управљања',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 15,
            predmeti: 'Техничка документација',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 16,
            predmeti: 'Предузетништво',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 17,
            predmeti: 'Практична настава',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 18,
            predmeti: 'Електроенергетика - Изборни',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 19,
            predmeti: 'Пословне комуникације - Изборни',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 20,
            predmeti: 'Алати за управљање садржајем на интернету - Изборни',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 21,
            predmeti: 'Управљање пројектима - Изборни',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
        ]
      }
    },
    path       : '/elektrotehnicar-racunara',
  },
  {
    name       : 'Електротехничар процесног управљања',
    background : '/images/obrazovni-profili/elektrotehnicar-procesnog-upravljanja.png',
    details    : 'Електротехничар процесног управљања програмира рачунаре да управљању процесима као што су грејање и хлађење, рад сигурносних и алармних уређаја, рад семафора, контрола и паковање производа, изазивање сценских ефеката итд. Ови системи се примењују у многим областима производње, контроле, надзора и одржавања. То су на пример електропривреда, погони у индустријској производњи, разни објекти за регулисање и контролу саобраћаја, медицинске установе, установе културе и забаве, хотели итд. Програмирају и микрорачунаре уграђене у различите дисплеје, билборде, камере, мобилне телефоне, алате и друге уређаје. Потребно је да добро познаје и примењује електротехнику и најсавременија техничка достигнућа из електронике, рачунарске технике, аутоматског управљања и регулације за рад у свим гранама привреде.',
    pageContent: {
      otherText: 'Смер процесног управљања обухвата следеће области које се изучавају током школовања: електроника и енергетска електроника, електричне машине и постројења, електричне инсталације, елементи аутоматизације и аутоматског управљања, микроконтролери, програмабилни логички контролери, рачунарско управљање и програмирање, управљање електричним погонима, примена рачунара. Прве две године изучавају се општи предмети и група општестручних предмета (основе електротехнике, електроника, примена рачунара). Трећа и четврта година се састоји од ускостручних предмета, подељених на теоријске часове и практични део. У практичном делу организују се лабораторијске вежбе а предвиђена је и блок-настава, где се по потреби организују посете фирмама или предузећима која користе елементе процесног управљања.',
      table    : {
        columns: [
          {title: 'Предмети', field: 'predmeti', cellStyle: {fontSize: '1rem'}, align: 'left'},
          {title: 'I разред', field: 'razred1', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'II разред', field: 'razred2', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'III разред', field: 'razred3', cellStyle: {fontSize: '1rem'}, align: 'center'},
          {title: 'IV разред', field: 'razred4', cellStyle: {fontSize: '1rem'}, align: 'center'},
        ],
        rows   : [
          {
            id      : 1,
            predmeti: 'Основе електротехнике',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 2,
            predmeti: 'Техничко цртање са нацртном геометријом',
            razred1 : <Check/>,
            razred2 : null,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 3,
            predmeti: 'Електротехнички материјали',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 4,
            predmeti: 'Примена рачунара у електротехници',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 5,
            predmeti: 'Електрична мерења',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 6,
            predmeti: 'Електроника',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 7,
            predmeti: 'Мерења у електроенергетици',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 8,
            predmeti: 'Енергетска електроника',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 9,
            predmeti: 'Економика и организација предузећа',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 10,
            predmeti: 'Електричне инсталације и осветљење',
            razred1 : null,
            razred2 : <Check/>,
            razred3 : null,
            razred4 : null
          },
          {
            id      : 11,
            predmeti: 'Електричне машине са испитивањем',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : <Check/>
          },
          {
            id      : 12,
            predmeti: 'Елементи аутоматизације',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 13,
            predmeti: 'Микроконтролери',
            razred1 : null,
            razred2 : null,
            razred3 : <Check/>,
            razred4 : null
          },
          {
            id      : 14,
            predmeti: 'Електрично покретање',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 15,
            predmeti: 'Управљање електромоторним погоном',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 16,
            predmeti: 'Програмабилни логички контролери',
            razred1 : null,
            razred2 : null,
            razred3 : null,
            razred4 : <Check/>
          },
          {
            id      : 17,
            predmeti: 'Практична настава',
            razred1 : <Check/>,
            razred2 : <Check/>,
            razred3 : <Check/>,
            razred4 : null
          },
        ]
      }
    },
    path       : '/elektrotehnicar-procesnog-upravljanja',
  },
]

