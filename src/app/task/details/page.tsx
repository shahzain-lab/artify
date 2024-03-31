import Dropdown from '@/components/elements/Dropdown'
import { Tabs, Tab } from '@/components/elements/Tabs'
import Typography from '@/components/elements/Typography'
import TaskDetails from '@/modules/task/TaskDetails'
import React from 'react'
import Comments from './Comments'

{
  /* Description Markup from CMS or markup editor */
}
const details = `
  <div>
  <h2 class="text-white text-base">Task Description:</h2>
  <p>As a user, I want to have a comprehensive guide for creating tasks, which should cover various aspects such as formatting, organization, and best practices.</p>
  
  <h2>Acceptance Criteria:</h2>
  <ol>
    <li>
      <h3 class="text-white text-base">Introduction:</h3>
      <ul class="list-disc ml-5">
        <li>Provide an overview of the purpose of creating tasks.</li>
        <li>Explain the importance of proper task formatting for clarity and efficiency.</li>
      </ul>
    </li>
    <li>
      <h3 class="text-white text-base">Formatting Guidelines:</h3>
      <ul class="list-disc ml-5">
        <li>Outline the usage of markup elements such as headers, paragraphs, and lists.</li>
        <li>Include examples of proper formatting for better understanding.</li>
      </ul>
    </li>
    <li>
      <h3 class="text-white text-base">Organization:</h3>
      <ul class="list-disc ml-5">
        <li>Discuss strategies for organizing tasks within projects.</li>
        <li>Highlight the benefits of categorization and labeling.</li>
      </ul>
    </li>
    <li>
      <h3 class="text-white text-base">Ordering Tasks:</h3>
      <ul class="list-disc ml-5">
        <li>Explain the significance of prioritizing tasks.</li>
        <li>Provide tips for setting task priorities effectively.</li>
      </ul>
    </li>
    <li>
      <h3 class="text-white text-base">Nested Lists:</h3>
      <ul class="list-disc ml-5">
        <li>Demonstrate the use of nested lists for hierarchical task structures.</li>
        <li>Offer guidance on when and how to utilize nested lists appropriately.</li>
      </ul>
    </li>
    <li>
      <h3 class="text-white text-base">Best Practices:</h3>
      <ul class="list-disc ml-5">
        <li>Offer recommendations for maintaining consistency across tasks.</li>
        <li>Emphasize the importance of clear and concise task descriptions.</li>
      </ul>
    </li>
  </ol>
  
  <h2 class="text-white text-base">Additional Information:</h2>
  <ul class="list-disc ml-5">
    <li>The document should be easily accessible and understandable for users of all experience levels.</li>
    <li>Utilize HTML markup for clear presentation and ease of navigation.</li>
  </ul>
</div>
`

const DetailPage = () => {
  return (
    <div>
      <Typography className='text-2xl'>Comprehensive Guide Creation</Typography>
      <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-start md:pr-6'>
        <div className='flex flex-col-reverse md:flex-row md:items-start justify-between w-full'>
          <Tabs className='bg-inherit shadow-none flex' defaultTab={0} orientation='horizontal'>
            <Tab color='primary' variant='underline' id={0} title='Description'>
              <p className='text-noble-black-300 text-sm leading-7' dangerouslySetInnerHTML={{ __html: details }}></p>
            </Tab>
            <Tab color='primary' variant='underline' id={1} title='Comments'>
              <Comments />
            </Tab>
          </Tabs>
          <div className='md:mt-5 my-5 md:my-0 ml-2 md:ml-0 md:mr-4 '>
            <Dropdown title='Testing' Icon color='ghost' options={['Done', 'Testing', 'In Progress']} />
          </div>
        </div>
        <TaskDetails />
      </div>
    </div>
  )
}

export default DetailPage
