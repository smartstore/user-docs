# Managing Scheduled Tasks

In Smartstore, you are often required to run tasks at specified times on a regular basis to manage various activities. The Task  Scheduler enables you to schedule jobs that automatically run predefined scheduled tasks at the specified time. The types of tasks which can be scheduled cover:

* Sending queued emails
* Deleting obsolete or transient records from the database
* Cleaning up the temporary files folder
* Cache management
* Updating currency exchange rates
* Generating feed or export files

Besides the tasks that are part of the application core, third party plugins may also install custom tasks, e.g. to poll or synchronize (external) data on a regular basis.

{% hint style="info" %}
[Accessing the Scheduled Tasks List](managing-scheduled-tasks.md#accessing-the-scheduled-tasks-list) [Running a Task Manually](managing-scheduled-tasks.md#running-a-task-manually) [Editing a Task](managing-scheduled-tasks.md#editing-a-task) [Types of Tasks](managing-scheduled-tasks.md#types-of-tasks) [Cron Expressions](managing-scheduled-tasks.md#cron-expressions)
{% endhint %}

## Accessing the Scheduled Tasks List

Scheduled tasks can be viewed and managed by navigating to **System -> Scheduled Tasks**.&#x20;

![Scheduled Tasks List](<../../.gitbook/assets/Scheduled Tasks   SmartStore.NET administration.png>)

All tasks are listed with information under the following headings:

* **Enabled** - Shows whether the task is scheduled or disabled&#x20;
* **Cron Expression** - the cron expression defining the frequency at which the task is executed and its human readable description below
* **Last Run**- Info about the task's last execution (date and time, duration and possible error)
* **Next Run** - the date and time when the task is next scheduled to be executed. This column will be empty if the task is disabled. If the task is currently running, an animated progress indicator will be displayed instead.
* **Actions** - Options to edit the task, run it manually or cancel the task (if it's running)

## Running a Task Manually

To run a task manually, head to the Scheduled Tasks list and choose  **Run Now** in the Actions column. It will run immediately.&#x20;

## Editing a Task

To edit a scheduled task, go to the _Edit Task_ screen by choosing **Edit** in the Actions column.

![Editing a task](<../../.gitbook/assets/Edit task   Send emails   SmartStore.NET administration.png>)

| Field            | Description                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled          | Check the box to enable the scheduled execution of the task in accordance with the cron expression. Uncheck to disable scheduled execution. Disabled tasks can still be executed manually.        |
| Disable on Error | Check the box if the task should be disabled automatically when an error occurs during scheduled execution.                                                                                       |
| Cron Expression  | Enter an expression that defines the schedule for the automatic execution of the task. Read more about cron expressions [further below](managing-scheduled-tasks.md#ManagingScheduledTasks-Cron). |

## Types of Tasks

| Task Name                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default Schedule                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Send E-Mails                   | <p>Sends all e-mails in the message queue. For more information about the e-mail queue, read the topic <a href="analyzing-the-message-queue.md">Analyzing the Message Queue</a>.<br><img src="https://smartstore.atlassian.net/wiki/s/1262048869/6452/2ef421ea87febf37890d2fb0e5bb13917e70857c/_/images/icons/emoticons/warning.png" alt="(Warnung)"><br><br>If you disable this task, neither you nor your customers will receive e-mails anymore.</p> | Every minute                       |
| Clear E-Mail Queue             | Clears queued e-mail entries that have already been processed to ensure that its size does not grow indefinitely.                                                                                                                                                                                                                                                                                                                                       | At 02:00 AM every day              |
| Delete Logs                    | Deletes log entries which are older than 7 days to ensure that its size does not grow indefinitely.                                                                                                                                                                                                                                                                                                                                                     | At 01:00 AM every day              |
| Delete Guest Accounts          | Deletes transient guest customer accounts which are older than 24 hours to ensure that its size does not grow indefinitely.                                                                                                                                                                                                                                                                                                                             | At 01:00 AM every day              |
| Clear Cache                    | Clears the application's memory cache to free up memory.                                                                                                                                                                                                                                                                                                                                                                                                | Every 4 hours                      |
| Cleanup Temporary Files        | Deletes temporary application files from folder _App\_Data/\_temp_ to free up disk space. Does NOT touch subfolders.                                                                                                                                                                                                                                                                                                                                    | At 03:30 AM every day              |
| Update Currency Exchange Rates | Fetches updated currency exchange rates from a web service and imports them into the application database.                                                                                                                                                                                                                                                                                                                                              | Every 15 minutes                   |
| Clear Transient Uploads        | Deletes transient (unassigned) uploaded binary data from the database and file system to ensure that its size does not grow indefinitely.                                                                                                                                                                                                                                                                                                               | At 01:30 AM and 01:30 PM every day |

## Cron Expressions

A cron expression is a string of 5 'time interval' fields that defines the frequency at which a task is executed. Each of these fields can be expressed as either a numerical value or a special character, and each field is separated by a space character.&#x20;

The following graph shows what a cron expression consists of:

\* \* \* \* \* | | | | | | | | | +---- Day of the Week (range: 0-6 or SUN-SAT, 0 standing for Sunday) | | | +------ Month of the Year (range: 1-12 or JAN-DEC) | | +-------- Day of the Month (range: 1-31) | +---------- Hour (range: 0-23) +------------ Minute (range: 0-59)

* Any of these 5 fields may be an asterisk (\*). This would mean the entire range of possible values, i.e. each minute, each hour, etc.
* Any field may contain a list of values separated by commas, (e.g. 1\*,3,7\*) or a range of values (two integers separated by a hyphen, e.g. 1-5).
* After an asterisk ( _**\***_ ) or a range of values, you can use the slash character (_/)_ to specify that values are repeated over and over with a certain interval between them. For example, you can write "_0-23/2"_ in _Hour_ field to specify that a certain action should be performed every two hours (it will have the same effect as "_0,2,4,6,8,10,12,14,16,18,20,22"_); value _"\*/4"_ in _Minute_ field means that the action should be performed every 4 minutes, _"1-30/3"_ means the same as "_1,4,7,10,13,16,19,22,25,28"_.
* In the _Month_ and _Day of Week_ fields, you can use the names of months or days of weeks abbreviated to the first three letters ("JAN,FEB,...,DEC" or "MON,TUE,...,SUN") instead of their numeric values.

### Cron Expression Examples

Here are some full examples:

| Expression                                | Meaning                                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| \*   \*   \*   \*   \*                    | Every minute                                                                                                    |
| 5   \*   \*   \*   \*                     | Five minutes past every hour (00:05, 01:05, 02:05 etc.).                                                        |
| 0/15 \* \* \* \*                          | Every 15 minutes                                                                                                |
| 0 \*/2 \* \* \*                           | Every 2 hours                                                                                                   |
| 0 1 \* \* \*                              | Every day at 01:00 AM                                                                                           |
| \*   12   \*   \*   1                     | Every minute from 12:00 PM, only on Monday                                                                      |
| 59   11   \*   \*   1 , 2 , 3 , 4 , 5     | At 11:59 AM, only on Monday, Tuesday, Wednesday, Thursday, and Friday                                           |
| 59   11   \*   \*   1 - 5                 | This pattern is equivalent to the previous one. Value ranges are omitted and defined using the hyphen character |
| \*/ 15   9 - 17   \*   \*   \*            | Every 15 minutes, between 09:00 AM and 05:59 PM                                                                 |
| \*   12   10 - 16 / 2   \*   \*           | Every minute from 12:00 PM, every 2 days, between day 10 and 16 of the month                                    |
| \*   12   1 - 15 , 17 , 20 - 25   \*   \* | Every minute from 12:00 PM between the 1st and the 15th, the 20th and the 25th, and the 17th of the month.      |
