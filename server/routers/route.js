import { Router } from "express";
import * as questionController from '../controllers/questionController.js';
import * as userController from '../controllers/userController.js'
import * as resultController from  "../controllers/resultController.js"
import * as controller from '../controllers/loginController.js'
import * as feedbackController from '../controllers/feedbackController.js'
const router =Router();


/*** routes ***/

/** login route api */
 router.post('/login',controller.login);

/**   Getting all users */
 router.route('/user').get(userController.getUser);
                      




router.route('/user/:name').delete(userController.deleteUser)/** deleting user by name api */
                           .put(userController.updateUser)/**updating user */

/** register Route api */
router.route('/register').post(userController.StoreUser);

/** Questions Routes api */
router.route('/questions').get(questionController.getAllQuestions) /** get request */
                          .post(questionController.insertQuestions)/** post request */
                          .delete(questionController.dropQuestions)/** delete request */


/** getting questions by topic name */
router.route('/questions/:subject').get(questionController.getQuestions)

 router.route('/result')   
          .get(resultController.getResult)
          .post(resultController.postResult)
          .delete(resultController.dropResult)

router.route('/feedback').get(feedbackController.getFeedback)
                        .post(feedbackController.postFeedback)
router.route('/feedback/:name').get(feedbackController.getOneFeedback)

                     
 export default router;
