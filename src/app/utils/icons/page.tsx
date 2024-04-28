'use client'
import React from 'react'
import CardLayer from '@/components/elements/CardLayer'
{
  /* Icons */
}
import {
  Artificium,
  Alert,
  AngleBR,
  Backlog,
  Chat,
  CheveronDown,
  CheveronRight,
  Code,
  Comment,
  CommentDashed,
  Cross,
  Card,
  ColorPallet,
  Danger,
  DoubleLeft,
  DoubleRight,
  Dribble,
  DollarSign,
  DayLight,
  Document,
  Download,
  Edit,
  GetStarted,
  GroupUser,
  Globe,
  Idea,
  Image,
  IconPlus,
  Join,
  Library,
  Level,
  Login,
  Like,
  Moon,
  Notification,
  Pencil,
  Plus,
  Project,
  PaperPlane,
  Register,
  Resource,
  Rectangle,
  Setting,
  Share,
  Sqaure,
  Search,
  Status,
  Success,
  TriLine,
  Task,
  Tab,
  TripleDot,
  TwoDots,
  UserPlus,
  User,
  Warning,
  Watch,
  Workspace,
  
 
} from '@/utils/icons'
import IconItem from './IconItem'

const Page = () => {
  const storeInArray = [
    Artificium,
    AngleBR,
    Alert,
    Backlog,
    Chat,
    CheveronDown,
    CheveronRight,
    Code,
    Comment,
    CommentDashed,
    Cross,
    ColorPallet,
    Card,
    Danger,
    DoubleLeft,
    DoubleRight,
    Dribble,
    DollarSign,
    DayLight,
    Document,
    Download,
    Edit,
    GetStarted,
    GroupUser,
    Globe,
    Idea,
    Image,
    IconPlus,
    Join,
    Library,
    Level,
    Login,
    Like,
    Moon,
    Notification,
    Pencil,
    Plus,
    Project,
    PaperPlane,
    Register,
    Resource,
    Rectangle,
    Setting,
    Share,
    Sqaure,
    Search,
    Status,
    Success,
    TriLine,
    Task,
    TripleDot,
    Tab,
    TwoDots,
    UserPlus,
    User,
    Warning,
    Watch, 
    Workspace,

  ]
  return (
    <div>
      <CardLayer title='Icons Components'>
        <div className='flex flex-wrap gap-14'>
        {storeInArray.map((Icon, i) => <IconItem key={i} Icon={Icon} />)}
        </div>
      </CardLayer>
    </div>
  )
}

export default Page
