# HGv2
The official website of house of geeks version2

# How to contribute
Below are the steps to follow to contribute to this project:

**1**. Fork [this](https://github.com/houseofgeeks/hgv2.git) repository.

**2**. Clone your forked copy of the project.
```
git clone https://github.com/<your_username>/hgv2.git
```
where your_username is your GitHub username.

**3**. Navigate to the project directory
```
cd client
```
**4**. Initialize git track on the forked copy to track the changes.
```
git init
```
**5**. Add a reference(remote) to the original repository.
```
git remote add upstream https://github.com/houseofgeeks/hgv2.git
```
**6**. Check the remotes for this repository.
```
git remote -v
```
**7**. Always take a pull from the upstream repository to your main branch to keep it at par with the main project
```
git pull upstream main
```
**8**. Create a new branch.
```
git checkout -b <your_branch_name>
```
**9**. Make necessary changes and commit those changes

**10**. Track your changes.
```
git add .
```
**11**. Commit your changes .
```
git commit -m "your_message"
```
**12**. Push the committed changes in your feature branch to your remote repo.
```
git push -u origin <your_branch_name>
```
**13**. To create a pull request, click on Compare & pull request. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.
**14**. Add appropriate title and description to your pull request explaining your changes.
**15**. Click on Create pull request. Your pull request will be created.





