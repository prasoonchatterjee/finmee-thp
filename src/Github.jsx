import GithubLogo from './photos/github-mark-white.svg';
import BurgerMenu from './photos/icons8-hamburger-button-50.png';
import PlusIcon from './photos/icons8-plus-24.svg';
import CircleIcon from './photos/icons8-circle-50.png';
import NotificationIcon from './photos/icons8-notification-50.png';
import ShareIcon from './photos/icons8-share-50.png';
import UserIcon from './photos/icons8-user-50.png';
import StarIconLarge from './photos/icons8-star-48.png';
import StarIconSmall from './photos/icons8-star-24.png';
import BlueCircleIcon from './photos/icons8-circle-16.png';

const Github = () => {
  return (
    <div className='bg-[#020408] text-white text-l '>
      <header className='flex h-20 border-b border-borderColor'>
        <div className='w-1/2 flex items-center p-2'>
          <img src={BurgerMenu} className='w-8 m-2' />
          <img src={GithubLogo} className='w-8 m-2' />
          <p className='text-white m-2'>Dashboard</p>
        </div>
        <div className='w-1/2 flex justify-end items-center '>
          <input
            placeholder='  Type "/"  to search'
            className='p-2 h-8 m-4 border border-borderColor bg-black rounded w-96'
          />
          <img
            src={PlusIcon}
            className='w-8 h-8 p-2 border border-borderColor rounded m-2'
          />
          <img
            src={CircleIcon}
            className='w-8 h-8 p-2 border border-borderColor rounded m-2'
          />
          <img
            src={NotificationIcon}
            className='w-8 h-8 p-2 border border-borderColor rounded m-2'
          />
          <img
            src={ShareIcon}
            className='w-8 h-8 p-2 border border-borderColor rounded m-2'
          />
          <img
            src={UserIcon}
            className='w-8 h-8 p-2 border border-borderColor rounded m-2'
          />
        </div>
      </header>
      <main className='flex'>
        <aside className='w-1/4 p-4 border-r border-borderColor'>
          <div className='flex justify-between mt-8 px-2'>
            <p>Top Repositories</p>
            <button className='px-4 bg-green-500 text-black rounded text-sm'>
              New
            </button>
          </div>
          <div className='p-2'>
            <input
              placeholder='   Find a repository'
              className='border border-borderColor rounded-md w-full bg-black p-1'
            />
          </div>
          <div className='p-2'>
            <div className='flex py-1'>
              <img src={UserIcon} className='w-6' />
              <p className='px-2'>prasoonchatterjee/grapqhl-thp</p>
            </div>
            <div className='flex py-1'>
              <img src={UserIcon} className='w-6' />
              <p className='px-2'>prasoonchatterjee/grapqhl-thp</p>
            </div>
            <div className='flex py-1'>
              <img src={UserIcon} className='w-6' />
              <p className='px-2'>prasoonchatterjee/grapqhl-thp</p>
            </div>
            <div className='flex py-1'>
              <img src={UserIcon} className='w-6' />
              <p className='px-2'>prasoonchatterjee/grapqhl-thp</p>
            </div>
            <div className='flex py-1'>
              <img src={UserIcon} className='w-6' />
              <p className='px-2'>prasoonchatterjee/grapqhl-thp</p>
            </div>
            <p className='mt-4 text-sm'>Show More</p>
            <p className='mt-4'>Recent activity</p>
            <div className='border border-dashed border-borderColor p-4 rounded-md mt-2'>
              <p className='text-sm'>
                When you take actions across GitHub, we’ll provide links to that
                activity here.
              </p>
            </div>
          </div>
        </aside>

        <div className='p-8 w-1/2'>
          <header className='flex justify-between border-b border-borderColor p-2'>
            <div className='flex'>
              <p className='mr-4'>For You</p>
              <p>Following</p>
            </div>
            <div className='flex'>
              <p className='mr-4 text-blue-500'>Send Feedback</p>
              <p>Filter</p>
            </div>
          </header>
          <div className=' border border-borderColor mt-8 rounded-lg p-4'>
            <div className='flex justify-between mb-2'>
              <p>Welcome to the new feed.</p>
              <img src={GithubLogo} className='w-5' />
            </div>
            <p>
              We’re updating the cards and ranking all the time, so check back
              regularly. At first, you might need to follow some people or star
              some repositories to get started 🌱.
            </p>
            <p className='mt-2 text-blue-500'>Send feedback</p>
          </div>
          <div>
            <div className='flex mt-8 items-center'>
              <img src={UserIcon} className='w-5 h-5 mr-2' />
              <p>gopinav followed antfu. 2 days ago.</p>
            </div>
            <div className='border border-borderColor rounded-md flex mt-4 p-4 justify-between'>
              <div>
                <div className='flex'>
                  <div className='flex pr-4'>
                    <img src={GithubLogo} className='w-10 h-10' />
                  </div>
                  <div>
                    <p>Anthony Fu</p>
                    <p>
                      A ship in harbor is safe, but that is not what ships are
                      built for.
                    </p>
                    <div className='flex mt-2'>
                      <p className='mr-2'>291 repositories</p>
                      <p>25k followers</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className='border border-borderColor px-4 rounded-md bg-gray-800 h-8 text-sm'>
                Follow
              </button>
            </div>
          </div>
          <div>
            <div className='flex mt-8 items-center'>
              <img src={UserIcon} className='w-5 h-5 mr-2' />
              <p>gopinav followed antfu. 2 days ago.</p>
            </div>
            <div className='border border-borderColor rounded-md flex mt-4 p-4 justify-between'>
              <div>
                <div className='flex'>
                  <div className='flex pr-4'>
                    <img src={GithubLogo} className='w-10 h-10' />
                  </div>
                  <div>
                    <p>Anthony Fu</p>
                    <p>
                      A ship in harbor is safe, but that is not what ships are
                      built for.
                    </p>
                    <div className='flex mt-2'>
                      <p className='mr-2'>291 repositories</p>
                      <p>25k followers</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className='border border-borderColor px-4 rounded-md bg-gray-800 h-8 text-sm'>
                Follow
              </button>
            </div>
          </div>
          <div>
            <div className='flex mt-8 items-center'>
              <img src={UserIcon} className='w-5 h-5 mr-2' />
              <p>gopinav followed antfu. 2 days ago.</p>
            </div>
            <div className='border border-borderColor rounded-md flex mt-4 p-4 justify-between'>
              <div>
                <div className='flex'>
                  <div className='flex pr-4'>
                    <img src={GithubLogo} className='w-10 h-10' />
                  </div>
                  <div>
                    <p>Anthony Fu</p>
                    <p>
                      A ship in harbor is safe, but that is not what ships are
                      built for.
                    </p>
                    <div className='flex mt-2'>
                      <p className='mr-2'>291 repositories</p>
                      <p>25k followers</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className='border border-borderColor px-4 rounded-md bg-gray-800 h-8 text-sm'>
                Follow
              </button>
            </div>
          </div>

          <div>
            <div className='flex mt-8 items-center'>
              <img src={UserIcon} className='w-5 h-5 mr-2' />
              <p>gopinav followed antfu. 2 days ago.</p>
            </div>
            <div className='border border-borderColor rounded-md flex mt-4 p-4 justify-between'>
              <div>
                <div className='flex'>
                  <div className='flex pr-4'>
                    <img src={GithubLogo} className='w-10 h-10' />
                  </div>
                  <div>
                    <p>Anthony Fu</p>
                    <p>
                      A ship in harbor is safe, but that is not what ships are
                      built for.
                    </p>
                    <div className='flex mt-2'>
                      <p className='mr-2'>291 repositories</p>
                      <p>25k followers</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className='border border-borderColor rounded-md px-4 rounded-md bg-gray-800 h-8 text-sm'>
                Follow
              </button>
            </div>
          </div>

          <div>
            <div className='flex mt-8 items-center'>
              <img src={UserIcon} className='w-5 h-5 mr-2' />
              <p>gopinav followed antfu. 2 days ago.</p>
            </div>
            <div className='border border-borderColor rounded-md flex mt-4 p-4 justify-between'>
              <div>
                <div className='flex'>
                  <div className='flex pr-4'>
                    <img src={GithubLogo} className='w-10 h-10' />
                  </div>
                  <div>
                    <p>Anthony Fu</p>
                    <p>
                      A ship in harbor is safe, but that is not what ships are
                      built for.
                    </p>
                    <div className='flex mt-2'>
                      <p className='mr-2'>291 repositories</p>
                      <p>25k followers</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className='border border-borderColor px-4 rounded-md bg-gray-800 h-8 text-sm'>
                Follow
              </button>
            </div>
          </div>

          <div className='mt-8 flex'>
            <div className='m-4 flex'>
              <img src={GithubLogo} className='w-6 h-6 mr-2' />© 2023. Github
              Inc.
            </div>
            <ul className='mx-8'>
              <li>Blog</li>
              <li>About</li>
              <li>Shop</li>
              <li>Contact Github</li>
              <li>Pricing</li>
            </ul>
            <ul className='mx-8'>
              <li>API</li>
              <li>Training</li>
              <li>Status</li>
              <li>Security</li>
            </ul>
            <ul className='mx-8'>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Docs</li>
            </ul>
          </div>
        </div>

        <aside className='w-1/4'>
          <div className='border border-borderColor mt-8 p-4 rounded-md'>
            <div className='flex'>
              <div className='flex pr-4'>
                <img src={GithubLogo} className='w-10 h-10' />
              </div>
              <div>
                <p>AI Security</p>
                <p>DevEx</p>
              </div>
            </div>

            <p className='text-sm mt-4'>
              Get your in-person tickets up to 30% off, only for a limited time.
            </p>
            <button className='border border-borderColor px-4 rounded-md bg-gray-800 h-8 text-sm w-full mt-4'>
              Get Tickets
            </button>
          </div>

          <div className='mt-4'>
            <p>Latest Changes</p>
            <div className='px-4 my-4 border-l border-borderColor'>
              <p className='text-sm'>15 hours ago</p>
              <p>Github Desktop 3.3 - Repository rules.</p>
            </div>
            <div className='px-4 my-4 border-l border-borderColor'>
              <p className='text-sm'>3 days ago</p>
              <p>
                Update to Actions usage in Enterprise Managed User namespace
                repositories
              </p>
            </div>
            <div className='px-4 my-4 border-l border-borderColor'>
              <p className='text-sm'>3 days ago</p>
              <p>GitHub Enterprise Server 3.10 is generally available</p>
            </div>
            <div className='px-4 my-4 border-l border-borderColor'>
              <p className='text-sm'>3 days ago</p>
              <p>
                GGitHub Actions: Review network access settings for the
                self-hosted runners
              </p>
            </div>
            <p>Explore Repositories</p>
          </div>

          <div>
            <article className='mt-4 border-b border-borderColor pb-6 mr-4'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <img src={GithubLogo} className='w-6 h-6' />
                  <p className='ml-2'>prasoonchatterjee/grapqhl-thp</p>
                </div>
                <img
                  src={StarIconLarge}
                  className='w-8 border border-borderColor p-2 rounded bg-gray-700'
                />
              </div>
              <p className='text-sm mt-4'>
                ASP.NET Core is a cross-platform .NET framework for building
                modern cloud-based web applications on Windows, Mac, or Linux.
              </p>
              <div className='flex mt-4 text-sm'>
                <div className='flex'>
                  <img src={StarIconSmall} className='w-5' />
                  <p className='ml-2'>32.5k</p>
                </div>
                <div className='flex ml-6'>
                  <img src={BlueCircleIcon} className='w-5' />
                  <p className='ml-2'>javascript</p>
                </div>
              </div>
            </article>

            <article className='mt-4 border-b border-borderColor pb-6 mr-4'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <img src={GithubLogo} className='w-6 h-6' />
                  <p className='ml-2'>prasoonchatterjee/grapqhl-thp</p>
                </div>
                <img
                  src={StarIconLarge}
                  className='w-8 border border-borderColor p-2 rounded bg-gray-700'
                />
              </div>
              <p className='text-sm mt-4'>
                ASP.NET Core is a cross-platform .NET framework for building
                modern cloud-based web applications on Windows, Mac, or Linux.
              </p>
              <div className='flex mt-4 text-sm'>
                <div className='flex'>
                  <img src={StarIconSmall} className='w-5' />
                  <p className='ml-2'>32.5k</p>
                </div>
                <div className='flex ml-6'>
                  <img src={BlueCircleIcon} className='w-5' />
                  <p className='ml-2'>javascript</p>
                </div>
              </div>
            </article>

            <article className='mt-4 pb-6 mr-4'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <img src={GithubLogo} className='w-6 h-6' />
                  <p className='ml-2'>prasoonchatterjee/grapqhl-thp</p>
                </div>
                <img
                  src={StarIconLarge}
                  className='w-8 border border-borderColor p-2 rounded bg-gray-700'
                />
              </div>
              <p className='text-sm mt-4'>
                ASP.NET Core is a cross-platform .NET framework for building
                modern cloud-based web applications on Windows, Mac, or Linux.
              </p>
              <div className='flex mt-4 text-sm'>
                <div className='flex'>
                  <img src={StarIconSmall} className='w-5' />
                  <p className='ml-2'>32.5k</p>
                </div>
                <div className='flex ml-6'>
                  <img src={BlueCircleIcon} className='w-5' />
                  <p className='ml-2'>javascript</p>
                </div>
              </div>
            </article>
            <p className='text-blue-500'>Explore more</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Github;
